import { type Asset, type Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";

export type Post = RawPost & {
  slug: string;
  categorySlug: string;
  excerpt: string;
  assets: Asset[];
};

export type PostSkeleton = ContentType<"blogPost", RawPost>;

export type RawPost = {
  posted: string;
  content: Document;
  title: string;
  category: Entry<CategorySkeleton, undefined>[];
};

export type SnippetSkeleton = ContentType<"snippet", Snippet>;

export type Snippet = {
  content: Document;
  label: string;
};

export type CategorySkeleton = ContentType<"category", Category>;

export type Category = {
  name: string;
  slug: string;
  id: number;
  description: string;
};

export type Proficiency = "high" | "medium" | "starter";

export type SkillSkeleton = ContentType<"skill", Skill>;

export type Skill = {
  name: string;
  proficiency: Proficiency;
  interestingness: number;
  notes?: Document;
  projects?: Record<string, string>;
};

export type ContentType<S extends string, T extends object> = {
  contentTypeId: S;
  fields: T;
};
export type SocialSkeleton = ContentType<"social", Social>;
export type Social = {
  platform: string;
  link: string;
  username: string;
};
