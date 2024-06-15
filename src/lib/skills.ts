import type { Skill, SkillSkeleton } from "@/lib/";
import { getEntries } from "@/lib/";

export async function getSkills(): Promise<Skill[]> {
	return (await getEntries<SkillSkeleton>(`skill`)).sort(
		(a, b) => b.interestingness - a.interestingness,
	);
}

export function splitSkillsByProficiency(allSkills: Skill[]): {
	high: Skill[];
	medium: Skill[];
	starter: Skill[];
} {
	return Object.groupBy(allSkills, (item) => item.proficiency) as {
		high: Skill[];
		medium: Skill[];
		starter: Skill[];
	};
}
