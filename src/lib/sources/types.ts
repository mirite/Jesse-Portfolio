import type { ComponentType } from "react";

export type Post<T> = {
	posted: string;
	title: string;
	content: T;
	slug: string;
	categorySlug: string;
	excerpt: string;
	source: Source<T>;
};

export type Category = {
	name: string;
	slug: string;
	id: number;
	description: string;
};

export type Source<T> = {
	getCategories: () => Promise<Category[]>;
	getPosts: () => Promise<Post<T>[]>;
	Component: ComponentType<{ content: T }>;
};
