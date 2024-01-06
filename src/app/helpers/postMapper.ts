import { Asset } from "contentful";
import { Post, RawPost } from "@/types";
import { createSlug } from "@/app/helpers/stringTransforms";

export function postMapper(entry: RawPost): Post {
  const category = getCategory(entry);
  const categoryName = (category?.fields.name as string) || "";
  const slug = getSlug(entry);
  const excerpt = getExcerpt(entry);
  const assets = getAssets(entry);
  return {
    ...entry,
    slug,
    categorySlug: categoryName.toLowerCase(),
    excerpt,
    assets,
  };
}

function getExcerpt(entry: RawPost): string {
  const content = entry.content.content;
  const firstParagraph = content.find(
    (block) => block.nodeType === "paragraph",
  );

  const firstParagraphContent = firstParagraph?.content[0];
  if (firstParagraphContent && "value" in firstParagraphContent) {
    return firstParagraphContent.value;
  }
  return "";
}

export function getSlug(entry: RawPost) {
  return createSlug(entry.title);
}

function getCategory(entry: RawPost) {
  return getCategories(entry)[0];
}

function getCategories(entry: RawPost) {
  return entry.category;
}

function getAssets(entry: RawPost): Asset[] {
  const assetBlocks = entry.content.content.filter(
    ({ nodeType }) => nodeType === "embedded-asset-block",
  );
  return assetBlocks.map((block) => block.data.target);
}
