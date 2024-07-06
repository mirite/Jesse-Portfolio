import type { Metadata } from "next";

import type { Post, PostSkeleton } from "@/lib/";
import { getEntries, postMapper } from "@/lib/";

/**
 * Generates the Next metadata for a post.
 * @param params The post's static parameters.
 * @returns The metadata for the post.
 */
export async function generateMetadata(
	props: PostPageProps,
): Promise<Metadata> {
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
	PostPageProps["params"][]
> {
	const posts = await getPosts(100);

	const paths = posts.map((post) => ({
		categorySlug: post.categorySlug,
		slug: post.slug,
	}));
	return paths;
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

export interface PostPageProps {
	params: { slug: string; categorySlug: string };
}
