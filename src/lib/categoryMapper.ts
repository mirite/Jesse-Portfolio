import { type Category, createSlug } from "@/lib/";

export function categoryMapper(entry: Category): Category & { slug: string } {
	const slug = createSlug(entry.name);
	return { ...entry, slug };
}
