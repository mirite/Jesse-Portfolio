import { Metadata } from "next";
import { getEntries } from "@/app/helpers/connector";
import { PostSkeleton } from "@/types";
import { postMapper } from "@/app/helpers/postMapper";

export async function createPostMetadata(slug: string): Promise<Metadata> {
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

export async function getPostsForStaticBuild() {
  const posts = await getPosts(100);

  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function getPost(postSlug: string) {
  const allPosts = await getPosts();
  const post = allPosts.find(({ slug }) => {
    return slug.toLowerCase() === postSlug.toLowerCase();
  });
  if (post) {
    return post;
  }
}

export async function getPosts(count: number = 9999, categorySlug?: string) {
  return (await getEntries<PostSkeleton>(`blogPost`))
    .map(postMapper)
    .filter((post) => !categorySlug || post.categorySlug === categorySlug)
    .slice(0, count);
}
