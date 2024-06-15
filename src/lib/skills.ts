import type { Skill, SkillSkeleton } from "@/lib/";
import { getEntries  } from "@/lib/";

export async function getSkills() {
	return (await getEntries<SkillSkeleton>(`skill`)).sort(
		(a, b) => b.interestingness - a.interestingness,
	);
}

export function splitSkillsByProficiency(allSkills: Skill[]) {
	const high = allSkills.filter(({ proficiency }) => proficiency === "high");
	const medium = allSkills.filter(
		({ proficiency }) => proficiency === "medium",
	);
	const starter = allSkills.filter(
		({ proficiency }) => proficiency === "starter",
	);
	return { high, medium, starter };
}
