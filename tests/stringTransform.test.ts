import { describe, it, expect } from "vitest";

import { createSlug, getPrettyDate } from "../src/lib/stringTransforms";

describe("stringTransform", () => {
	it("should create a url friendly slug", () => {
		expect(createSlug("Hello World")).toBe("hello-world");
	});

	it("should make a pretty date", () => {
		expect(getPrettyDate("2021-06-01T00:00:00.000")).toBe("6/1/2021");
	});
});
