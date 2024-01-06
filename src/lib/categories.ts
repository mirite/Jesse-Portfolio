import { CategorySkeleton } from "@/lib/";
import { categoryMapper } from "@/lib/";
import { getEntries } from "@/lib/";
import { Metadata } from "next";

export async function getCategories() {
  return (await getEntries<CategorySkeleton>(`category`)).map(categoryMapper);
}

export async function getCategoriesForStaticBuild() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function getCategory(categorySlug: string) {
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
