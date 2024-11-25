import MdPost from "@/lib/sources/markdown/MDPost";
import { getLocalPosts } from "@/lib/sources/markdown/posts";
import type { Source } from "@/lib/types";

const source: Source<string> = {
	getCategories: async () => {
		return [];
	},
	getPosts: async function () {
		return (await getLocalPosts()).map((p) => ({ ...p, source: this }));
	},
	Component: MdPost,
};

export default source;
