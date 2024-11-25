import type { Document } from "@contentful/rich-text-types";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
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

export type Proficiency = "high" | "medium" | "starter";

export type Source<T> = {
	getCategories: () => Promise<Category[]>;
	getPosts: () => Promise<Post<T>[]>;
	Component: ComponentType<{ content: T }>;
};
export type ContentType<S extends string, T extends object> = {
	contentTypeId: S;
	fields: T;
};
export type SkillSkeleton = ContentType<"skill", Skill>;
export type SnippetSkeleton = ContentType<"snippet", Snippet>;
export type Snippet = {
	content: Document;
	label: string;
};
export type Skill = {
	name: string;
	proficiency: Proficiency;
	interestingness: number;
	notes?: Document;
	projects?: Record<string, string>;
};
export type SocialSkeleton = ContentType<"social", Social>;
export type Social = {
	platform: string;
	link: string;
	username: string;
	icon?: IconProp;
};
