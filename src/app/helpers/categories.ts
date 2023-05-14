import { Category } from "@/types";
import { categoryMapper } from "@/app/helpers/categoryMapper";
import { getEntries } from "@/app/helpers/connector";
import { Metadata } from "next";

export async function getCategories() {
  return (await getEntries<Category>(`category`)).map(categoryMapper);
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
