import React from 'react';
import {getPost, getPostsForStaticBuild} from "@/app/wordpress";
import {createPostMetadata} from "@/app/posts";

interface Props {
    params: { slug: string };
}

const Page = async (props: Props) => {
    const {params} = props;
    const {slug} = params;
    const post = await getPost(slug);
    if (!post) {
        return <p>Post not found {slug}</p>
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.content || ""}}></div>
        </div>
    );
};

export async function generateMetadata({params}: Props) {
    return await createPostMetadata(params.slug)
}

export async function generateStaticParams() {
    return await getPostsForStaticBuild("3");
}

export default Page;
