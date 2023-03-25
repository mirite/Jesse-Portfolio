import React from 'react';
import {getPosts, getPostsForStaticBuild} from "@/app/wordpress";

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

export async function generateStaticParams() {
    return await getPostsForStaticBuild("14");
}

export default Page;
