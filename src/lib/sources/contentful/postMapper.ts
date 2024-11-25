import type { Document } from "@contentful/rich-text-types";
import type { Asset } from "contentful";

import type { RawPost } from "./types.js";

import { type Post, createSlug } from "@/lib";

/**
 * Takes a post from Contentful and maps it to a post for the app.
 *
 * @param entry The post from Contentful.
 * @returns The post for the app.
 * @throws Error An error if the category name isn't found.
 */
export function postMapper(entry: RawPost): Omit<Post<Document>, "source"> {
	const category = getCategory(entry);
	const categoryName = category?.fields.name as string;
	if (!categoryName) {
		throw new Error(`Category name not found for post ${entry.title}`);
	}
	const slug = getSlug(entry);
	const excerpt = getExcerpt(entry);
	const assets = getAssets(entry);
	return {
		...entry,
		slug,
		categorySlug: categoryName.toLowerCase(),
		excerpt,
	};
}

/**
 * Creates an excerpt from a post.
 *
 * @param entry The post from Contentful.
 * @returns The excerpt for the post.
 */
function getExcerpt(entry: RawPost): string {
	const content = entry.content.content;
	const firstParagraph = content.find(
		(block) => block.nodeType === "paragraph",
	);

	const firstParagraphContent = firstParagraph?.content[0];
	if (firstParagraphContent && "value" in firstParagraphContent) {
		return firstParagraphContent.value;
	}
	return "";
}

/**
 * Creates a slug from a post's title.
 *
 * @param entry The post from Contentful.
 * @returns The slug for the post.
 */
export function getSlug(entry: RawPost): string {
	return createSlug(entry.title);
}

/**
 * Gets the category for a post.
 *
 * @param entry The post from Contentful.
 * @returns The category for the post, or undefined if not found.
 */
function getCategory(entry: RawPost) {
	return getCategories(entry)?.[0];
}

/**
 * Gets the categories for a post.
 *
 * @param entry The post from Contentful.
 * @returns Gets the categories for a post.
 */
function getCategories(entry: RawPost) {
	return entry.category;
}

/**
 * Gets the assets for a post.
 *
 * @param entry The post from Contentful.
 * @returns The assets for the post.
 */
function getAssets(entry: RawPost): Asset[] {
	const assetBlocks = entry.content.content.filter(
		({ nodeType }) => nodeType === "embedded-asset-block",
	);
	return assetBlocks.map((block) => block.data.target);
}
