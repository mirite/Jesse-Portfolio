import type { Metadata, ResolvedMetadata } from "next";

import { sources } from "@/lib/sources";
import type { Post } from "@/lib/types";

/**
 * Generates the Next metadata for a post.
 *
 * @param props The props for the post.
 * @param parent The parent metadata.
 * @returns The metadata for the post.
 */
export async function generateMetadata(
	props: PostPageProps,
	parent: Promise<ResolvedMetadata>,
): Promise<Metadata> {
	const { slug } = await props.params;
	const { title: parentTitle } = await parent;
	const post = await getPost(slug);
	if (!post) {
		return {};
	}

	const { title, excerpt } = post;
	return {
		title: `${parentTitle?.absolute} - ${title}`,
		description: excerpt,
	};
}

/**
 * Generates the static parameters for all posts.
 *
 * @returns The static parameters for all posts.
 */
export async function generateStaticParams(): Promise<
	Awaited<PostPageProps["params"]>[]
> {
	const posts = await getPosts(100);

	return posts.map((post) => ({
		categorySlug: post.categorySlug,
		slug: post.slug,
	}));
}

/**
 * Gets a post by its slug.
 *
 * @param postSlug The slug of the post.
 * @returns The post with the given slug, or undefined if not found.
 */
export async function getPost(
	postSlug: string,
): Promise<Post<unknown> | undefined> {
	const allPosts = await getPosts();
	const post = allPosts.find(({ slug }) => {
		return slug.toLowerCase() === postSlug.toLowerCase();
	});
	if (post) {
		return post;
	}
}

/**
 * Gets all posts.
 *
 * @param count The number of posts to get. Defaults to 9999.
 * @param categorySlug The slug of the category to filter by.
 * @returns All posts.
 */
export async function getPosts(
	count: number = 9999,
	categorySlug?: string,
): Promise<Post<unknown>[]> {
	let posts: Post<unknown>[] = [];
	for (const source of sources) {
		const postsFromSource = await source.getPosts();
		posts = posts.concat(postsFromSource);
	}
	return posts
		.filter((post) => !categorySlug || post.categorySlug === categorySlug)
		.sort((a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime())
		.slice(0, count);
}

export interface PostPageProps {
	params: Promise<{ slug: string; categorySlug: string }>;
}
