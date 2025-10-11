import { describe, expect, it } from "vitest";

import { postMapper } from "@/lib/sources/contentful/postMapper";
import type { RawPost } from "@/lib/sources/contentful/types";

describe("postMapper", () => {
	it("Should create excerpts and slugs for posts", () => {
		const input = {
			category: [
				{
					fields: {
						description: "Test Description",
						id: 1,
						name: "Test Category",
						slug: "test-category",
					},
				},
			],
			content: {
				content: [
					{
						content: [
							{
								value: "Hello World",
							},
						],
						nodeType: "paragraph",
					},
				],
			},
			posted: "2021-06-01T00:00:00.000",
			title: "Test Post",
		} as unknown as RawPost;
		const output = postMapper(input);
		expect(output.slug).toBe("test-post");
		expect(output.excerpt).toBe("Hello World");
		expect(output.categorySlug).toBe("test category");
	});

	it("Should give a blank excerpt when there is no body copy", () => {
		const input = {
			category: [],
			content: {
				content: [],
			} as unknown as Document,
			posted: "2021-06-01T00:00:00.000",
			title: "Test Post",
		} as unknown as RawPost;
		const output = postMapper(input);
		expect(output.excerpt).toBe("");
	});
});
