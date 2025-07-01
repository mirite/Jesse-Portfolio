import type { Document } from "@contentful/rich-text-types";

import type { ContentType } from "../supplementalData";

export type Snippet = {
	content: Document;
	label: string;
};
export type SnippetSkeleton = ContentType<"snippet", Snippet>;
