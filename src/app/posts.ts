import type {Post} from "@/types";
import {Metadata} from "next";
import {getPost} from "@/app/wordpress";

export async function createPostMetadata(slug: string): Promise<Metadata> {
    const post = await getPost(slug);
    if(!post) {
        return {};
    }
    const {title, excerpt} = post;
    return { title: title, description: excerpt};
}
