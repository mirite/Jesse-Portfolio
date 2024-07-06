import type { Metadata } from "next";

import type { Post, PostSkeleton } from "@/lib/";
import { getEntries, postMapper } from "@/lib/";

/**
 * Generates the Next metadata for a post.
 * @param params The post's static parameters.
 * @returns The metadata for the post.
 */
export async function generateMetadata(props: PostProps): Promise<Metadata> {
	const { slug } = props.params;
	const post = await getPost(slug);
	if (!post) {
		return {};
	}

	const { title, excerpt, category } = post;
	return {
		title: category[0].fields.name + " > " + title,
		description: excerpt,
	};
}

/**
 * Generates the static parameters for all posts.
 * @returns The static parameters for all posts.
 */
export async function generateStaticParams(): Promise<
	Pick<Post, "category" | "slug">[]
> {
	const posts = await getPosts(100);

	return posts.map((post) => ({
		category: post.category,
		slug: post.slug,
	}));
}

export async function getPost(postSlug: string): Promise<Post | undefined> {
	const allPosts = await getPosts();
	const post = allPosts.find(({ slug }) => {
		return slug.toLowerCase() === postSlug.toLowerCase();
	});
	if (post) {
		return post;
	}
}

export async function getPosts(
	count: number = 9999,
	categorySlug?: string,
): Promise<Post[]> {
	return (await getEntries<PostSkeleton>(`blogPost`))
		.map(postMapper)
		.filter((post) => !categorySlug || post.categorySlug === categorySlug)
		.slice(0, count);
}

export interface PostProps {
	params: { slug: string; category: string };
}
