import type { Source } from "@/lib";

import contentful from "./contentful";
import markdown from "./markdown";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sources: Source<any>[] = [contentful, markdown];
