import type { Root } from "remark-parse/lib";

import type { Source } from "../types";

import MdPost from "./MDPost";
import { getLocalPosts } from "./posts";

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
