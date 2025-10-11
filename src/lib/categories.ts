import type { Metadata, ResolvingMetadata } from "next";

import type { Category } from "@/lib/sources";
import { sources } from "@/lib/sources";

export interface CategoryPageProps {
	params: Promise<{ categorySlug: string }>;
}

/**
 * Generates the metadata for a category.
 *
 * @param props The props for the category.
 * @param parentData The parent metadata.
 * @returns The metadata for the category.
 */
export async function generateMetadata(
	props: CategoryPageProps,
	parentData: ResolvingMetadata,
): Promise<Metadata> {
	const { categorySlug: slug } = await props.params;
	const { title } = await parentData;
	const category = await getCategory(slug);
	if (!category) {
		return {};
	}
	const { description, name } = category;
	return { description, title: `${title?.absolute} - ${name}` };
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
 * Gets the categories.
 *
 * @returns The categories.
 */
export async function getCategories(): Promise<Category[]> {
	const categories: Category[] = [];
	for (const source of sources) {
		const sourceCategories = await source.getCategories();
		categories.push(...sourceCategories);
	}
	return categories;
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
