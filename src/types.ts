import { EntrySkeletonType, type Asset, type Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
export interface Post extends RawPost {
  slug: string;
  categorySlug: string;
  excerpt: string;
  assets: Asset[];
}

export type RawPost = ContentType<"blogPost",{
    posted: string;
    content: Document;
    title: string;
    category: Entry<Category, undefined>[];
  }
>

export type Snippet = ContentType<"snippet",{
    content: Document;
    label: string;
  }
>

export type Category = ContentType<"category",{
    name: string;
    slug: string;
    id: number;
    description: string;
  }

>


export type Proficiency = "high" | "medium" | "starter";


export type Skill = ContentType<"skill", {
  name: string;
  proficiency: Proficiency;
  interestingness: number;
  notes?: Document;
  projects?: Record<string, string>;
}
>

export type ContentType<S extends string, T extends object> = {
    contentTypeId: S;
    fields: T;
    };
