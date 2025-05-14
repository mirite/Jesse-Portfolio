import type { Document } from "@contentful/rich-text-types";

import type { ContentType } from "@/lib/supplementalData";

export type Proficiency = "high" | "medium" | "starter";
export type Skill = {
	interestingness: number;
	name: string;
	notes?: Document;
	proficiency: Proficiency;
	projects?: Record<string, string>;
};
export type SkillSkeleton = ContentType<"skill", Skill>;
