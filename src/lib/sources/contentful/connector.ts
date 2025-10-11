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

/**
 * Gets the asset with the specified ID or null if it couldn't be found
 *
 * @param id The ID of the asset to fetch.
 * @returns The asset or null
 */
export async function getAsset(id: string): Promise<AssetFields | null> {
	const client = getClient();
	try {
		return (await client.getAsset(id)).fields;
	} catch (e) {
		console.error(e);
		return null;
	}
}

/**
 * Gets the content with the provided ID from the API
 *
 * @template T The type of the content being fetched.
 * @param id The ID of the content to fetch.
 * @returns The content or null if not available.
 */
export async function getContent<T extends EntrySkeletonType>(
	id: string,
): Promise<null | T["fields"]> {
	const client = getClient();
	try {
		return (await client.getEntry<T>(id)).fields;
	} catch (e) {
		console.error(e);
		return null;
	}
}
/**
 * Gets the entries with the specified content type.
 *
 * @template T The type of the entries.
 * @param id The ID of the content type
 * @returns The entries
 */
export async function getEntries<T extends EntrySkeletonType>(
	id: string,
): Promise<T["fields"][]> {
	const client = getClient();
	const response = await client.getEntries<T>({ content_type: id });
	return response.items.map((i) => i.fields);
}

/**
 * Gets a documents content as plain text.
 *
 * @template T The type of the document.
 * @param id The id of the document to get.
 * @param field The field to get the content of.
 * @returns The plain text.
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
 * Gets the rich text content for the id provided.
 *
 * @template T The type of the content being fetched.
 * @param id The ID of the content
 * @param field The field of the content to grab
 * @param raw Whether or not the document should be converted to react nodes or
 *   left as is
 * @returns The Document or the nodes.
 */
export async function getRichTextContent<T extends EntrySkeletonType>(
	id: string,
	field: keyof T["fields"],
	raw?: boolean,
): Promise<Document | ReactNode> {
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
 * Gets the instance of the contentful client.
 *
 * @returns The instance of the client
 * @throws Error if the contentful credentials weren't set in the environment.
 */
function getClient() {
	if (!_client) {
		const space = process.env.SPACE || "";
		const environment = process.env.ENVIRONMENT || "master"; // defaults to 'master' if not set
		const accessToken = process.env.ACCESSTOKEN || "";
		if (!space || !accessToken)
			throw new Error("Contentful credentials not set");
		const params: CreateClientParams = {
			accessToken,
			environment,
			space,
		};
		_client = createClient(params);
	}
	return _client;
}
