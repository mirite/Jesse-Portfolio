import type { Skill, SkillSkeleton } from "@/lib/";
import { getEntries } from "@/lib/";

/**
 * Gets all the skills.
 *
 * @returns All the skills.
 */
export async function getSkills(): Promise<Skill[]> {
	return (await getEntries<SkillSkeleton>(`skill`)).sort(
		(a, b) => b.interestingness - a.interestingness,
	);
}

/**
 * Splits the skills by proficiency.
 *
 * @param allSkills All the skills.
 * @returns The skills split by proficiency.
 */
export function splitSkillsByProficiency(allSkills: Skill[]): {
	high: Skill[];
	medium: Skill[];
	starter: Skill[];
} {
	if (!Object.groupBy) {
		Object.groupBy = function <K extends PropertyKey, T>(
			array: Iterable<T>,
			key: (item: T, index: number) => K,
		) {
			return Array.from(array).reduce(
				(result, currentValue, currentIndex) => {
					(result[key(currentValue, currentIndex)] =
						result[key(currentValue, currentIndex)] || []).push(currentValue);
					return result;
				},
				{} as Partial<Record<K, T[]>>,
			);
		};
	}
	return Object.groupBy(allSkills, (item) => item.proficiency) as {
		high: Skill[];
		medium: Skill[];
		starter: Skill[];
	};
}
