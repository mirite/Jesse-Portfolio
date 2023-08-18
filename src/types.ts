import type { Asset, Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
export interface Post extends RawPost {
  slug: string;
  categorySlug: string;
  excerpt: string;
  assets: Asset[];
}

export interface RawPost {
  posted: string;
  content: Document;
  title: string;
  category: Entry<Category>[];
}

export interface Snippet {
  content: Document;
  label: string;
}

export type Category = {
  name: string;
  slug: string;
  id: number;
  description: string;
};

export type Proficiency = "high" | "medium" | "starter";
export type Skill = {
  name: string;
  proficiency: Proficiency;
  interestingness: number;
};
