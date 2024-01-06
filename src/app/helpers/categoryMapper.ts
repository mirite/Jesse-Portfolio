import { Category } from "@/types";
import { createSlug } from "@/app/helpers/stringTransforms";

export function categoryMapper(entry: Category) {
  const slug = createSlug(entry.name);
  return { ...entry, slug };
}
