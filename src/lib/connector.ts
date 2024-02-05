import type { CreateClientParams, EntrySkeletonType } from "contentful";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

let _client: ReturnType<typeof createClient>;

function getClient() {
	if (!_client) {
		const space = process.env.SPACE || "";
		const environment = process.env.ENVIRONMENT || "master"; // defaults to 'master' if not set
		const accessToken = process.env.ACCESSTOKEN || "";
		if (!space || !accessToken)
			throw new Error("Contentful credentials not set");
		const params: CreateClientParams = {
			space,
			environment,
			accessToken,
		};
		_client = createClient(params);
	}
	return _client;
}

export async function getContent<T extends EntrySkeletonType>(
	id: string,
): Promise<T["fields"] | undefined> {
	const client = getClient();
	try {
		return (await client.getEntry<T>(id)).fields;
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

export async function getEntries<T extends EntrySkeletonType>(
	id: string,
): Promise<T["fields"][]> {
	const client = getClient();
	const response = await client.getEntries<T>({ content_type: id });
	return response.items.map((i) => i.fields);
}

// @ts-ignore
export async function getRichTextContent<T extends EntrySkeletonType>(
	id: string,
	field: keyof T["fields"],
	raw?: boolean,
) {
	const content = await getContent<T>(id);
	if (content) {
		const document = content[field] as Document;
		if (raw) {
			return document;
		}
		return documentToReactComponents(document);
	}
	return "";
}

export async function getPlainTextContent<T extends EntrySkeletonType>(
	id: string,
	field: keyof T["fields"],
) {
	const content = await getContent<T>(id);
	if (content) {
		const document = content[field] as Document;
		return documentToPlainTextString(document);
	}
	return "";
}
