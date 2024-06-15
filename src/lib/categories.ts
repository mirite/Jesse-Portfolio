import type { Metadata } from "next";
import type { Category, CategorySkeleton } from "@/lib";
import { categoryMapper, getEntries } from "@/lib/";

export async function getCategories(): Promise<
	(Category & { slug: string })[]
> {
	return (await getEntries<CategorySkeleton>(`category`)).map(categoryMapper);
}

export async function getCategoriesForStaticBuild(): Promise<
	{ category: string }[]
> {
	const categories = await getCategories();
	return categories.map((category) => ({
		category: category.slug,
	}));
}

export async function getCategory(
	categorySlug: string,
): Promise<Category | undefined> {
	const categories = await getCategories();
	const category = categories.find(({ slug }) => {
		return categorySlug.toLowerCase() === slug.toLowerCase();
	});
	if (category) {
		return category;
	}
}

export async function createCategoryMetadata(slug: string): Promise<Metadata> {
	const category = await getCategory(slug);
	if (!category) {
		return {};
	}
	const { name, description } = category;
	return { title: name, description };
}
