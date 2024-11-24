import { type Category, createSlug } from "@/lib";

/**
 * Takes a category from Contentful and maps it to a category for the app.
 *
 * @param entry The category from Contentful.
 * @returns The category for the app.
 */
export function categoryMapper(entry: Category): Category & { slug: string } {
	const slug = createSlug(entry.name);
	return { ...entry, slug };
}
