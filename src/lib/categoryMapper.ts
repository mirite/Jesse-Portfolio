import { type Category, createSlug } from "@/lib/";

/** @param entry */
export function categoryMapper(entry: Category): Category & { slug: string } {
	const slug = createSlug(entry.name);
	return { ...entry, slug };
}
