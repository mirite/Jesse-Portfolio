import type { ReactElement } from "react";
import React from "react";

import { Card } from "@/app/components/";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";
import type { Post } from "@/lib/";

interface Props {
	posts: Post[];
}
const Posts = (props: Props): ReactElement => {
	const { posts } = props;
	return (
		<MaxWidthContainer className="grid w-full justify-center gap-8 lg:grid-cols-2">
			{posts.map((post) => (
				<Card
					key={post.slug}
					title={post.title}
					link={post.categorySlug + "/" + post.slug}
					excerpt={post.excerpt}
				/>
			))}
		</MaxWidthContainer>
	);
};

export default Posts;
