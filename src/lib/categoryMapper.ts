import { type Category, createSlug } from "@/lib/";

export function categoryMapper(entry: Category) {
	const slug = createSlug(entry.name);
	return { ...entry, slug };
}
