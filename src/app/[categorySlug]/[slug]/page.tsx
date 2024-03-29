import React from "react";
import { createPostMetadata, getPost, getPostsForStaticBuild } from "@/lib/";
import { Post } from "@/app/components/";

interface Props {
	params: { slug: string; category: string };
}

const Page = async (props: Props) => {
	const { params } = props;
	const { slug } = params;
	const post = await getPost(slug);
	if (!post) {
		return <p>Post not found {slug}</p>;
	}
	return <Post {...post} />;
};

export async function generateMetadata({ params }: Props) {
	return await createPostMetadata(params.slug);
}

export async function generateStaticParams() {
	return await getPostsForStaticBuild();
}

export default Page;
