import type { Document } from "@contentful/rich-text-types";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ContentType<S extends string, T extends object> = {
	contentTypeId: S;
	fields: T;
};
export type SnippetSkeleton = ContentType<"snippet", Snippet>;
export type Snippet = {
	content: Document;
	label: string;
};
export type SocialSkeleton = ContentType<"social", Social>;
export type Social = {
	platform: string;
	link: string;
	username: string;
	icon?: IconProp;
};
