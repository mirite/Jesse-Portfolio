import Link from "next/link";
import type { ReactElement } from "react";
import React from "react";

import { PageWrapper, TextWrapper } from "@/app/components/";
import {
	createCategoryMetadata,
	getCategories,
	getCategoriesForStaticBuild,
	getPosts,
} from "@/lib/";
import type { Metadata } from "next";

interface Props {
	params: { categorySlug: string };
}

const Page = async (props: Props): Promise<ReactElement> => {
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return await createCategoryMetadata(params.categorySlug);
}

export async function generateStaticParams(): Promise<{ category: string }[]> {
	return await getCategoriesForStaticBuild();
}

export default Page;
