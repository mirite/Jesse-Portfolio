import type { Snippet, SnippetSkeleton } from "./types";

import { getContent } from "../sources/contentful/connector";

export * from "./types";

/**
 * Gets a snippet by its Contentful ID
 *
 * @param contentID The content ID.
 * @returns Snippet The snippet
 */
export async function getSnippet(contentID: string): Promise<Snippet> {
	const content = await getContent<SnippetSkeleton>(contentID);
	if (!content) throw new Error(`No snippet found with ID ${contentID}`);
	return content;
}
