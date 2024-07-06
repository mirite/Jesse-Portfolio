import { describe, it, expect } from "vitest";
import type { Category } from "../src/lib";
import { categoryMapper } from "../src/lib";

describe("categoryMapper", () => {
	it("Should attach a slug to a category", () => {
		const input: Category = {
			name: "Test Category",
			id: 1,
			slug: "",
			description: "",
		};
		const output = categoryMapper(input);
		expect(output.slug).toBe("test-category");
	});
});
