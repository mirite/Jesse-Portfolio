import { getEntries } from "@/app/helpers/connector";
import { Skill } from "@/types";

export async function getSkills() {
  return (await getEntries<Skill>(`skill`))
    .map((entry) => entry.fields)
    .sort((a, b) => b.interestingness - a.interestingness);
}

export function splitSkillsByProficiency(allSkills: Skill[]) {
  const high = allSkills.filter(({ proficiency }) => proficiency === "high");
  const medium = allSkills.filter(
    ({ proficiency }) => proficiency === "medium"
  );
  const starter = allSkills.filter(
    ({ proficiency }) => proficiency === "starter"
  );
  return { high, medium, starter };
}
