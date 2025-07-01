import type { ReactElement } from "react";

import React from "react";

import type { Post } from "@/lib/sources";

import { Card } from "@/app/components/";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";

interface Props {
	posts: Post<unknown>[];
}
const Posts = (props: Props): ReactElement => {
	const { posts } = props;
	return (
		<MaxWidthContainer className="grid w-full justify-center gap-8 lg:grid-cols-2">
			{posts
				.sort(
					(a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime(),
				)
				.map((post) => (
					<Card
						date={post.posted}
						excerpt={post.excerpt}
						key={post.slug}
						link={post.categorySlug + "/" + post.slug}
						title={post.title}
					/>
				))}
		</MaxWidthContainer>
	);
};

export default Posts;
