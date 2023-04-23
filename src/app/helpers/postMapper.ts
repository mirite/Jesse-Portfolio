import {Entry} from "contentful";
import {Category, Post, RawPost} from "@/types";
import {createSlug} from "@/app/helpers/stringTransforms";

export function postMapper(entry: Entry<RawPost>): Post {
    const category = getCategory(entry);
    const slug = getSlug(entry);
    const excerpt = getExcerpt(entry);
    return {...entry.fields, slug, category: category.fields.name.toLowerCase(), excerpt};
}

function getExcerpt(entry: Entry<RawPost>): string {
    const content = entry.fields.content.content;
    const firstParagraph= content.find(block=>block.nodeType==='paragraph');
    // @ts-expect-error
    return firstParagraph?.content[0]?.value || '';
}

export function getSlug(entry: Entry<RawPost>) {
    return createSlug(entry.fields.title);
}

function getCategory(entry: Entry<RawPost>) {
    return getCategories(entry)[0];
}

function getCategories(entry: Entry<RawPost>) {
    return entry.fields.category as Entry<Category>[];
}
