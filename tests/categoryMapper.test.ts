import { describe, expect, it } from "vitest";

import type { Category } from "../src/lib/sources";

import { categoryMapper } from "../src/lib/sources/contentful/categoryMapper";

describe("categoryMapper", () => {
	it("Should attach a slug to a category", () => {
		const input: Category = {
			description: "",
			id: 1,
			name: "Test Category",
			slug: "",
		};
		const output = categoryMapper(input);
		expect(output.slug).toBe("test-category");
	});
});
