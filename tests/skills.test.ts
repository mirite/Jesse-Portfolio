import { describe, it, expect } from "vitest";

import type { Skill } from "@/lib";
import { splitSkillsByProficiency } from "@/lib";

describe("skills", () => {
	it("should split skills by proficiency", () => {
		const testSkills: Skill[] = [
			{ proficiency: "high", name: "Skill 1", interestingness: 1 },
			{ proficiency: "medium", name: "Skill 2", interestingness: 2 },
			{ proficiency: "starter", name: "Skill 3", interestingness: 3 },
			{ proficiency: "high", name: "Skill 4", interestingness: 4 },
			{ proficiency: "medium", name: "Skill 5", interestingness: 5 },
			{ proficiency: "starter", name: "Skill 6", interestingness: 6 },
		];
		const { high, medium, starter } = splitSkillsByProficiency(testSkills);
		expect(high.length).toBe(2);
		expect(medium.length).toBe(2);
		expect(starter.length).toBe(2);
	});
});
