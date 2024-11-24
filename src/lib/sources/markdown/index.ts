import type { Source } from "@/lib/sources";
import { getLocalPosts } from "@/lib/sources/markdown/posts";

const source: Source = {
	getCategories: async () => {
		return [];
	},
	getPosts: getLocalPosts,
};

export default source;
