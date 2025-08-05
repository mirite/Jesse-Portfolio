import { describe, expect, it } from "vitest";

import type { Skill } from "@/lib/skills";

import { splitSkillsByProficiency } from "@/lib/skills";

describe("skills", () => {
	it("should split skills by proficiency", () => {
		const testSkills: Skill[] = [
			{ interestingness: 1, name: "Skill 1", proficiency: "high" },
			{ interestingness: 2, name: "Skill 2", proficiency: "medium" },
			{ interestingness: 3, name: "Skill 3", proficiency: "starter" },
			{ interestingness: 4, name: "Skill 4", proficiency: "high" },
			{ interestingness: 5, name: "Skill 5", proficiency: "medium" },
			{ interestingness: 6, name: "Skill 6", proficiency: "starter" },
		];
		const { high, medium, starter } = splitSkillsByProficiency(testSkills);
		expect(high.length).toBe(2);
		expect(medium.length).toBe(2);
		expect(starter.length).toBe(2);
	});
});
