import Link from "next/link";
import type { ReactElement } from "react";
import React from "react";

import { PageWrapper, TextWrapper } from "@/app/components/";
import type { CategoryPageProps } from "@/lib/";
import { getCategories, getPosts } from "@/lib/";

const Page = async (props: CategoryPageProps): Promise<ReactElement> => {
	const { params } = props;
	const categorySlug = params.categorySlug;
	const categories = await getCategories();
	const categoryDetails = categories.find(
		(category) => category.slug === categorySlug,
	);
	if (!categoryDetails) {
		return <div>Category not found</div>;
	}
	const posts = await getPosts(100, categorySlug);
	return (
		<PageWrapper title={categoryDetails.name}>
			<TextWrapper>
				<ul>
					{posts.map((post) => (
						<li key={post.slug}>
							<Link href={categorySlug + "/" + post.slug}>{post.title}</Link>
						</li>
					))}
				</ul>
			</TextWrapper>
		</PageWrapper>
	);
};

export { generateMetadata, generateStaticParams } from "@/lib/categories";

export default Page;
