import type { Document } from "@contentful/rich-text-types";

import { categoryMapper } from "./categoryMapper";
import { getEntries } from "./connector";
import { postMapper } from "./postMapper";
import RichTextRenderer from "./RichTextRenderer";
import type { CategorySkeleton, PostSkeleton } from "./types";

import type { Category, Source } from "@/lib/types";

/**
 * Gets the categories from Contentful and maps them to the app's categories.
 *
 * @returns The categories.
 */
async function getCategories(): Promise<Category[]> {
	return (await getEntries<CategorySkeleton>(`category`)).map(categoryMapper);
}

/**
 * Gets the posts from Contentful and maps them to the app's posts.
 *
 * @returns The posts.
 */
async function getPosts() {
	return (await getEntries<PostSkeleton>(`blogPost`)).map(postMapper);
}

const source: Source<Document> = {
	getCategories,
	getPosts: async function () {
		return (await getPosts()).map((p) => ({ ...p, source: this }));
	},
	Component: RichTextRenderer,
};
export default source;
