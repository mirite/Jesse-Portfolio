import type { Document } from "@contentful/rich-text-types";

export type ContentType<S extends string, T extends object> = {
	contentTypeId: S;
	fields: T;
};
export type SnippetSkeleton = ContentType<"snippet", Snippet>;
export type Snippet = {
	content: Document;
	label: string;
};
