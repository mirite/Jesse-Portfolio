import {ContentfulClientApi, createClient, CreateClientParams, Entry,  } from 'contentful';
import {documentToReactComponents as renderRichText} from '@contentful/rich-text-react-renderer';
import {Document} from '@contentful/rich-text-types';

let _client: ContentfulClientApi | undefined;

function getClient() {
    if (!_client) {
        const space = process.env.SPACE || '';
        const environment = process.env.ENVIRONMENT || 'master'; // defaults to 'master' if not set
            const accessToken = process.env.ACCESSTOKEN || '';
            const params: CreateClientParams = {
                space ,
                environment,
                accessToken
            }
        _client = createClient(params)
    }
return _client;
}

export async function getContent<T>(id: string): Promise<Entry<T> | undefined> {
    const client = getClient();
    try {
        return await client.getEntry<T>(id);
    } catch (e) {
        console.log(e)
    }
}
export async function getAsset(id: string) {
    const client = getClient();
    try {
        return (await client.getAsset(id)).fields;
    } catch (e) {
        console.log(e)
    }
}

export async function getEntries<T>(id: string) {
    const client = getClient();
    const response = await client.getEntries<T>({content_type: id});
    return response.items;
}

export async function getRichTextContent<T>(id: string, field: keyof T) {
    const content = await getContent<T>(id);
    if(content) {
        const document = content.fields[field] as Document;
    return renderRichText(document);
    }
}
