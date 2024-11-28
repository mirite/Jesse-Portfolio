import type { Root } from "remark-parse/lib";

import MdPost from "@/lib/sources/markdown/MDPost";
import { getLocalPosts } from "@/lib/sources/markdown/posts";
import type { Source } from "@/lib/types";

const source: Source<Root> = {
	getCategories: async () => {
		return [];
	},
	getPosts: async function () {
		return (await getLocalPosts()).map((p) => ({ ...p, source: this }));
	},
	Component: MdPost,
};

export default source;
