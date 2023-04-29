import React from 'react';
import Link from "next/link";
import {createCategoryMetadata, getCategories, getCategoriesForStaticBuild} from "@/app/helpers/categories";
import {getPosts} from "@/app/helpers/posts";
interface Props {
    params: { category: string };
}

const Page = async (props: Props) => {
    const {params} = props;
    const categorySlug = params.category;
    const categories = await getCategories();
    const categoryDetails = categories.find(category => category.slug === categorySlug);
    if(!categoryDetails) {
        return <div>Category not found</div>;
    }
    const posts = await getPosts(100, categorySlug);
    return (
        <div className="container">
            <h1>{categoryDetails.name}</h1>
            <ul>
                {posts.map(post => (<li key={post.slug}><Link href={categorySlug + "/" + post.slug}>{post.title}</Link></li>))}
            </ul>
        </div>
    );
};

export async function generateMetadata({params}: Props) {
    return await createCategoryMetadata(params.category)
}

export async function generateStaticParams() {
    return await getCategoriesForStaticBuild();
}

export default Page;
