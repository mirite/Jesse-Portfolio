import type { Document } from "@contentful/rich-text-types";
import type { Entry } from "contentful";

import type { ContentType } from "@/lib/supplementalData";
import type { Category } from "../types";

export type CategorySkeleton = ContentType<"category", Category>;
export type PostSkeleton = ContentType<"blogPost", RawPost>;
export type RawPost = {
	category: Entry<CategorySkeleton, undefined>[];
	content: Document;
	posted: string;
	title: string;
};
