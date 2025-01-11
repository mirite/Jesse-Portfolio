import type { ReactElement } from "react";
import React from "react";

import { PageWrapper , Post } from "@/app/components";
import type { PostPageProps } from "@/lib/";
import { getPost } from "@/lib/";

const Page = async (props: PostPageProps): Promise<ReactElement> => {
	const { params } = props;
	const { slug } = await params;
	const post = await getPost(slug);
	if (!post) {
		return <p>Post not found {slug}</p>;
	}
	return (
		<PageWrapper title={post.title}>
			<Post {...post} />
		</PageWrapper>
	);
};

export { generateStaticParams, generateMetadata } from "@/lib/posts";

export default Page;
