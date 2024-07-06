import { describe, it, expect } from "vitest";
import { postMapper, type RawPost } from "@/lib";

describe("postMapper", () => {
	it("Should create excerpts and slugs for posts", () => {
		const input = {
			posted: "2021-06-01T00:00:00.000",
			content: {
				content: [
					{
						nodeType: "paragraph",
						content: [
							{
								value: "Hello World",
							},
						],
					},
				],
			},
			title: "Test Post",
			category: [
				{
					fields: {
						name: "Test Category",
						slug: "test-category",
						id: 1,
						description: "Test Description",
					},
				},
			],
		} as unknown as RawPost;
		const output = postMapper(input);
		expect(output.slug).toBe("test-post");
		expect(output.excerpt).toBe("Hello World");
		expect(output.categorySlug).toBe("test category");
	});

	it("Should give a blank excerpt when there is no body copy", () => {
		const input = {
			posted: "2021-06-01T00:00:00.000",
			content: {
				content: [],
			} as unknown as Document,
			title: "Test Post",
			category: [],
		} as unknown as RawPost;
		const output = postMapper(input);
		expect(output.excerpt).toBe("");
	});
});
