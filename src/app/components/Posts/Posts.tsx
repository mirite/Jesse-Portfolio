import React from "react";
import { Card } from "@/app/components/";
import { Post } from "@/lib/";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";
interface Props {
	posts: Post[];
}
const Posts = (props: Props) => {
	const { posts } = props;
	return (
		<MaxWidthContainer>
			<div className="w-full grid gap-4 justify-center grid-cols-[repeat(auto-fit,minmax(300px,560px))]">
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
