import type { ReactElement } from "react";
import React from "react";

import { Post } from "@/app/components/";
import type { PostProps } from "@/lib/";
import { getPost } from "@/lib/";

const Page = async (props: PostProps): Promise<ReactElement> => {
	const { params } = props;
	const { slug } = params;
	const post = await getPost(slug);
	if (!post) {
		return <p>Post not found {slug}</p>;
	}
	return <Post {...post} />;
};

export { generateStaticParams, generateMetadata } from "@/lib/";

export default Page;
