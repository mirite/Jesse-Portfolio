import type { Document } from "@contentful/rich-text-types";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { type Asset } from "contentful";
import type { ReactElement } from "react";

import type { ContentType } from "@/lib/sources/contentful";

export type Post = {
	posted: string;
	title: string;
	content: () => ReactElement;
	slug: string;
	categorySlug: string;
	excerpt: string;
	assets?: Asset[]; //TODO: This belongs with the contentful source
};

export type RawMDPost = {
	posted: string;
	content: string;
	title: string;
};

export type SnippetSkeleton = ContentType<"snippet", Snippet>;

export type Snippet = {
	content: Document;
	label: string;
};

export type Category = {
	name: string;
	slug: string;
	id: number;
	description: string;
};

export type Proficiency = "high" | "medium" | "starter";

export type SkillSkeleton = ContentType<"skill", Skill>;

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
