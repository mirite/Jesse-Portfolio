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

export interface Snippet {
    content: Document;
    label: string;
}

export type Category = { name: string; slug: string; id: number, description: string };
