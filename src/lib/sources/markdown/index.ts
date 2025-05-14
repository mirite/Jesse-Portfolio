import type { Root } from "remark-parse/lib";

import type { Source } from "../types";

import MdPost from "./MDPost";
import { getLocalPosts } from "./posts";

const source: Source<Root> = {
	Component: MdPost,
	getCategories: () => {
		return [];
	},
	getPosts: async function () {
		return (await getLocalPosts()).map((p) => ({ ...p, source: this }));
	},
};

export default source;
