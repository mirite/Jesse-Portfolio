import {Entry} from "contentful";
import {Document} from '@contentful/rich-text-types';
export interface Post extends RawPost {
    slug: string;
    category: string
    excerpt: string;
}

export interface RawPost {
    posted: string;
    content: Document;
    title: string;
    category: Entry<Category>[]
}

export type Category = { name: string; slug: string; id: number }
