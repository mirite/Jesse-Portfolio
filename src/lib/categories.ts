import type { Metadata } from "next";

import type { Category, CategorySkeleton } from "@/lib";
import { categoryMapper, getEntries } from "@/lib/";

/**
 * Gets the categories.
 *
 * @returns The categories.
 */
export async function getCategories(): Promise<
	(Category & { slug: string })[]
> {
	return (await getEntries<CategorySkeleton>(`category`)).map(categoryMapper);
}

/**
 * Gets the static category parameters.
 *
 * @returns The static category parameters.
 */
export async function generateStaticParams(): Promise<
	Awaited<CategoryPageProps["params"]>[]
> {
	const categories = await getCategories();
	return categories.map((category) => ({
		categorySlug: category.slug,
	}));
}

/**
 * Gets a category by its slug.
 *
 * @param categorySlug The slug of the category.
 * @returns The category with the given slug, or undefined if not found.
 */
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

/**
 * Generates the metadata for a category.
 *
 * @param props The props for the category.
 * @returns The metadata for the category.
 */
export async function generateMetadata(
	props: CategoryPageProps,
): Promise<Metadata> {
	const { categorySlug: slug } = await props.params;
	const category = await getCategory(slug);
	if (!category) {
		return {};
	}
	const { name, description } = category;
	return { title: name, description };
}

export interface CategoryPageProps {
	params: Promise<{ categorySlug: string }>;
}
