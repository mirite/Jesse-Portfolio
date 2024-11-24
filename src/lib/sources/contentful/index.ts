import type { Category, CategorySkeleton, Post, PostSkeleton } from "@/lib";
import { categoryMapper, getEntries, postMapper } from "@/lib";
import type { Source } from "@/lib/sources";

/**
 * Gets the categories from Contentful and maps them to the app's categories.
 *
 * @returns The categories.
 */
async function getCategories(): Promise<(Category & { slug: string })[]> {
	return (await getEntries<CategorySkeleton>(`category`)).map(categoryMapper);
}

/**
 * Gets the posts from Contentful and maps them to the app's posts.
 *
 * @returns The posts.
 */
async function getPosts(): Promise<Post[]> {
	return (await getEntries<PostSkeleton>(`blogPost`)).map(postMapper);
}

const source: Source = { getCategories, getPosts };
export default source;
