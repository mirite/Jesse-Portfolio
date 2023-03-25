import React from 'react';
import {getPosts, getPostsForStaticBuild} from "@/app/wordpress";
import {createPostMetadata} from "@/app/posts";

interface Props {
    params: {slug: string};
}
const Page = (props: Props) => {
    const {params} = props;
    return (
        <div>
            {params.slug}
        </div>
    );
};

export async function generateMetadata({params}: Props) {
    return await createPostMetadata(params.slug)
}

export async function generateStaticParams() {
    return await getPostsForStaticBuild("14");
}

export default Page;
