import type { Document } from "@contentful/rich-text-types";
import type { Entry } from "contentful";

import type { Category, ContentType } from "@/lib";

export type PostSkeleton = ContentType<"blogPost", RawPost>;
export type RawPost = {
	posted: string;
	content: Document;
	title: string;
	category: Entry<CategorySkeleton, undefined>[];
};
export type CategorySkeleton = ContentType<"category", Category>;
