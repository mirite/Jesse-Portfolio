import type {
    WP_REST_API_Post as WPPost,
    WP_REST_API_Posts as WPPosts,
} from "wp-types";

const remote = "https://jgconner.com/wp/wp-json/wp/v2";

function processPost(post: WPPost) {
    post.date = post.date.substring(0, 10);
    post.content.rendered = post.content.rendered
        .replace(/data-width/g, "width")
        .replace(/data-height/g, "height");
    return post;
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

    if ("errors" in rawData) {
        return [];
    }
    console.log(rawData);
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

export async function getPostsForStaticBuild(categoryID: string) {
    const posts = await getPosts(100, categoryID);

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
