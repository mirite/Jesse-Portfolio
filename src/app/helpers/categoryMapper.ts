import { Entry } from "contentful";
import { Category } from "@/types";
import { createSlug } from "@/app/helpers/stringTransforms";

export function categoryMapper(entry: Entry<Category>) {
  const slug = createSlug(entry.fields.name);
  return { ...entry.fields, slug };
}
