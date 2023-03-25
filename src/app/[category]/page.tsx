import React from 'react';
import {getCategories, getCategoriesForStaticBuild, getPosts} from "@/app/wordpress";
import Link from "next/link";

interface Props {
    params: { category: string };
}

const Page = async (props: Props) => {
    const {params} = props;
    const categorySlug = params.category;
    const categories = await getCategories();
    console.log(categorySlug);
    console.log(categories);
    const categoryID = categories.find(category => category.slug === categorySlug)?.id;
    if(!categoryID) {
        return <div>Category not found</div>;
    }
    const posts = await getPosts(100, String(categoryID));
    return (
        <div>
            <ul>
                {posts.map(post => (<li key={post.slug}><Link href={categorySlug + "/" + post.slug}>{post.title}</Link></li>))}
            </ul>
            {params.category}
        </div>
    );
};

export async function generateStaticParams() {
    return await getCategoriesForStaticBuild();
}

export default Page;

