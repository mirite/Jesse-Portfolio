import type { ReactElement } from "react";
import React from "react";

import { Post } from "@/app/components/";
import { createPostMetadata, getPost, getPostsForStaticBuild } from "@/lib/";
import type { Metadata } from "next";

interface Props {
	params: { slug: string; category: string };
}

const Page = async (props: Props): Promise<ReactElement> => {
	const { params } = props;
	const { slug } = params;
	const post = await getPost(slug);
	if (!post) {
		return <p>Post not found {slug}</p>;
	}
	return <Post {...post} />;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return await createPostMetadata(params.slug);
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	return await getPostsForStaticBuild();
}

export default Page;
