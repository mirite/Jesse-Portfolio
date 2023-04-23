import {Metadata} from "next";
import {getContent, getEntries } from "@/app/helpers/connector";
import {RawPost} from "@/types";
import {postMapper} from "@/app/helpers/postMapper";

export async function createPostMetadata(slug: string): Promise<Metadata> {
    const post = await getPost(slug);
    if(!post) {
        return {};
    }
    const {title, excerpt} = post;
    return { title: title, description: excerpt};
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
    const post = allPosts.find(({slug}) => {
         return slug.toLowerCase() === postSlug.toLowerCase();
        }
    )
    if(post) {
        return post;
    }
}

export async function getPosts(count: number = 9999, categorySlug?: string) {
    return (await getEntries<RawPost>(`blogPost`)).map(postMapper).filter(post=>!categorySlug || post.category === categorySlug).slice(0, count);
}
