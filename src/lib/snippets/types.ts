import type { Document } from "@contentful/rich-text-types";

import type { ContentType } from "../supplementalData";

export type SnippetSkeleton = ContentType<"snippet", Snippet>;
export type Snippet = {
	content: Document;
	label: string;
};
