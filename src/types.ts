import { EntrySkeletonType, type Asset, type Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
export interface Post extends RawPost {
  slug: string;
  categorySlug: string;
  excerpt: string;
  assets: Asset[];
}

export interface RawPost {
  contentTypeID: "blogPost";
  fields: {
    posted: string;
    content: Document;
    title: string;
    category: Entry<Category, undefined>[];
  };
}

export interface Snippet {
  content: Document;
  label: string;
}

export type Category = {
  contentTypeId: "category";
  fields: {
    name: string;
    slug: string;
    id: number;
    description: string;
  };
};

export type Proficiency = "high" | "medium" | "starter";
export type Skill = {
  contenttypeID: "skill";
  fields: {
    name: string;
    proficiency: Proficiency;
    interestingness: number;
    notes?: Document;
    projects?: Record<string, string>;
  };
};
