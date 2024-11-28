import { describe, it, expect } from "vitest";

import { categoryMapper } from "../src/lib/sources/contentful/categoryMapper";
import type { Category } from "../src/lib/types";

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
