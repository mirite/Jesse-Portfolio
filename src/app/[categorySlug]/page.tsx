import React from "react";
import Link from "next/link";
import {
	createCategoryMetadata,
	getCategories,
	getCategoriesForStaticBuild,
	getPosts,
} from "@/lib/";
import { PageWrapper, TextWrapper } from "@/app/components/";

interface Props {
	params: { categorySlug: string };
}

const Page = async (props: Props) => {
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

export async function generateMetadata({ params }: Props) {
	return await createCategoryMetadata(params.categorySlug);
}

export async function generateStaticParams() {
	return await getCategoriesForStaticBuild();
}

export default Page;
