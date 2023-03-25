import React from 'react';
import {getPost, getPosts, getPostsForStaticBuild} from "@/app/wordpress";
import {Metadata} from "next";

interface Props {
    params: {slug: string};
}
const Page = async (props: Props) => {
    const {params} = props;
    const post = await getPost(params.slug);
    return (
        <div>
            <h1>{post?.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html: post?.content.rendered || ""}}></div>
        </div>
    );
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const post = await getPost(params.slug);
    return { title: post?.title.rendered, description: post?.excerpt.raw || ""};
}

export async function generateStaticParams() {
    return await getPostsForStaticBuild("3");
}

export default Page;
