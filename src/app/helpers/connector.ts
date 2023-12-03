import type { CreateClientParams, Entry, EntrySkeletonType,} from "contentful";
import {createClient} from "contentful";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import type {Document} from "@contentful/rich-text-types";

let _client: ReturnType<typeof createClient>;

function getClient() {
  if (!_client) {
    const space = process.env.SPACE || "";
    const environment = process.env.ENVIRONMENT || "master"; // defaults to 'master' if not set
    const accessToken = process.env.ACCESSTOKEN || "";
    const params: CreateClientParams = {
      space,
      environment,
      accessToken,
    };
    _client = createClient(params);
  }
  return _client;
}

export async function getContent<T extends EntrySkeletonType>(id: string): Promise<Entry<T, undefined> | undefined> {
  const client = getClient();
  try {
    return await client.getEntry<T>(id);
  } catch (e) {
    console.log(e);
  }
}
export async function getAsset(id: string) {
  const client = getClient();
  try {
    return (await client.getAsset(id)).fields;
  } catch (e) {
    console.log(e);
  }
}

export async function getEntries<T extends EntrySkeletonType>(id: string):Promise<Entry<T, undefined>[]> {
  const client = getClient();
  const response = await client.getEntries<T>({ content_type: id });
  return response.items;
}

// @ts-ignore
export async function getRichTextContent<T extends EntrySkeletonType>(id: string, field: keyof T) {
  const content = await getContent<T>(id);
  if (content) {
    const document = content.fields[field] as Document;
    return documentToReactComponents(document);
  }
  return "";
}
