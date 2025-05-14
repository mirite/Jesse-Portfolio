import type { ComponentType } from "react";

export type Category = {
	description: string;
	id: number;
	name: string;
	slug: string;
};

export type Post<T> = {
	categorySlug: string;
	content: T;
	excerpt: string;
	posted: string;
	slug: string;
	source: Source<T>;
	title: string;
};

export type Source<T> = {
	Component: ComponentType<{ content: T }>;
	getCategories: () => Category[] | Promise<Category[]>;
	getPosts: () => Promise<Post<T>[]>;
};
