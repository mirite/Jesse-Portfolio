import type { Source } from "./types";

import contentful from "./contentful";
import markdown from "./markdown";

export * from "./types";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sources: Source<any>[] = [contentful, markdown];
