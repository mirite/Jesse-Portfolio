import contentful from "./contentful";
import markdown from "./markdown";

import type { Category, Post } from "@/lib";

export type Source = {
	getCategories: () => Promise<Category[]>;
	getPosts: () => Promise<Post[]>;
};
export const sources: Source[] = [contentful, markdown];
