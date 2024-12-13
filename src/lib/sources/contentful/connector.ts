import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import type {
	AssetFields,
	CreateClientParams,
	EntrySkeletonType,
} from "contentful";
import { createClient } from "contentful";
import type { ReactNode } from "react";

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

/** @param id */
export async function getContent<T extends EntrySkeletonType>(
	id: string,
): Promise<T["fields"] | undefined> {
	const client = getClient();
	try {
		return (await client.getEntry<T>(id)).fields;
	} catch (e) {
		console.error(e);
	}
}
/** @param id */
export async function getAsset(id: string): Promise<AssetFields | undefined> {
	const client = getClient();
	try {
		return (await client.getAsset(id)).fields;
	} catch (e) {
		console.error(e);
	}
}

/** @param id */
export async function getEntries<T extends EntrySkeletonType>(
	id: string,
): Promise<T["fields"][]> {
	const client = getClient();
	const response = await client.getEntries<T>({ content_type: id });
	return response.items.map((i) => i.fields);
}

export async function getRichTextContent<T extends EntrySkeletonType>(
	id: string,
	field: keyof T["fields"],
	raw: true,
): Promise<Document>;
export async function getRichTextContent<T extends EntrySkeletonType>(
	id: string,
	field: keyof T["fields"],
	raw?: false,
): Promise<ReactNode>;
/**
 * @param id
 * @param field
 * @param raw
 */
export async function getRichTextContent<T extends EntrySkeletonType>(
	id: string,
	field: keyof T["fields"],
	raw?: boolean,
): Promise<ReactNode | Document> {
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

/**
 * @param id
 * @param field
 */
export async function getPlainTextContent<T extends EntrySkeletonType>(
	id: string,
	field: keyof T["fields"],
): Promise<string> {
	const content = await getContent<T>(id);
	if (content) {
		const document = content[field] as Document;
		return documentToPlainTextString(document);
	}
	return "";
}
