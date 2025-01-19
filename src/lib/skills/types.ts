import type { Document } from "@contentful/rich-text-types";

import type { ContentType } from "@/lib/supplementalData";

export type Proficiency = "high" | "medium" | "starter";
export type SkillSkeleton = ContentType<"skill", Skill>;
export type Skill = {
	name: string;
	proficiency: Proficiency;
	interestingness: number;
	notes?: Document;
	projects?: Record<string, string>;
};
