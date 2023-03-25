import type {
    WP_REST_API_Categories,
    WP_REST_API_Post as WPPost,
    WP_REST_API_Posts as WPPosts, WP_Taxonomy, WP_Taxonomy_Labels,
} from "wp-types";
import {Category} from "@/types";

const remote = "https://jgconner.com/wp/wp-json/wp/v2";
let categories: Category[];

function processPost(post: WPPost) {
    const date = post.date.substring(0, 10);
    const content = post.content.rendered
        .replace(/data-width/g, "width")
        .replace(/data-height/g, "height");
    const slug = post.slug;
    const title = post.title.rendered;
    const excerpt = post.excerpt.rendered;
    const category = getType(post);

    return {date, content, slug, title, excerpt, category};
}

function isPublished(post: WPPost): boolean {
    return post.status === "publish";
}

async function getRaw<T>(endpoint: string) {
    const path = `${remote}/${endpoint}`;
    const headers = {
        Accept: "application/json",
        "Accept-Encoding": "gzip, compress, br",
    };
    try {
        const data = await fetch(path, {headers});
        if (data) {
            const json = await data.json();
            return json as T;
        }

        return {errors: "No data returned"};
    } catch (err) {
        return {
            errors: err,
        };
    }
}

export async function getPosts(count: number, category?: string) {
    const endpoint =
        `posts?page=1&per_page=${count}&_embed=1` +
        (category ? `&categories=${category}` : "");
    const rawData = await getRaw<WPPosts>(endpoint);

    // @ts-ignore
    if ("errors" in rawData || ("data" in rawData && rawData.data.status > 399)) {
        return [];
    }
    return rawData.filter(isPublished).map(processPost);
}

export async function getPost(slug: string) {
    const endpoint = `posts?slug=${slug}`;
    const rawData = await getRaw<WPPosts>(endpoint);
    if ("errors" in rawData || rawData.length === 0) {
        return null;
    }

    return processPost(rawData[0]);
}

export async function getPage(slug: string) {
    const path = `pages?slug=${slug}&_embed=1`;
    const rawData = await getRaw<WPPosts>(path);
    if ("errors" in rawData || rawData.length === 0) {
        return null;
    }

    return processPost(rawData[0]);
}

export function getType(post: WPPost) {
    const terms=post["_embedded"]?.["wp:term"] as {slug: string}[][];
    if(!terms) return "";
    const firstTerm = terms[0][0];
    return firstTerm.slug;
}

export async function getPostsForStaticBuild() {
    const posts = await getPosts(100);

    return posts.map((post) => ({
        category: post.category,
        slug: post.slug,
    }));
}

export async function getCategories() {
    if(categories) {
        return categories;
    }
    const endpoint =
        `categories`;
    const rawData = await getRaw<WP_REST_API_Categories>(endpoint);

    if ("errors" in rawData) {
        return [];
    }
    categories = rawData.filter(category=>category.count).map(({slug, name, id})=> {
        return {slug, name, id};
    });
    return categories
}

export async function getCategoriesForStaticBuild() {
    const categories = await getCategories();
    return categories.map((category) => ({
        category: category.slug,
    }));
}
