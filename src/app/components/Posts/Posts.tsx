import React from "react";

import { Card } from "@/app/components/";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";
import type { Post } from "@/lib/";

interface Props {
	posts: Post[];
}
const Posts = (props: Props) => {
	const { posts } = props;
	return (
		<MaxWidthContainer>
			<div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,560px))] justify-center gap-4">
				{posts.map((post) => (
					<Card
						key={post.slug}
						title={post.title}
						link={post.categorySlug + "/" + post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</MaxWidthContainer>
	);
};

export default Posts;
