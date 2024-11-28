"use server";
import * as fs from "node:fs";
import * as path from "node:path";

import matter from "gray-matter";
import codeblocks from "remark-code-blocks";
import parser from "remark-parse";
import type { Root } from "remark-parse/lib";
import { unified } from "unified";

import type { Post } from "@/lib/types";

const postsDirectory = path.resolve("src", "blogs");
/**
 * Gets the local posts from the file system.
 *
 * @returns The local posts.
 */
export async function getLocalPosts(): Promise<Omit<Post<Root>, "source">[]> {
	const files = await fs.promises.readdir(postsDirectory);
	const posts: Omit<Post<Root>, "source">[] = [];

	for (const file of files) {
		const content = await fs.promises.readFile(
			path.join(postsDirectory, file),
			"utf8",
		);
		const matterResult = matter(content);

		const parsedContent = unified()
			.use(parser)
			.use(codeblocks)
			.parse(matterResult.content);

		posts.push({
			posted: matterResult.data.posted,
			title: matterResult.data.title,
			slug: file.replace(/\.md$/, ""),
			content: parsedContent,
			categorySlug: matterResult.data.category,
			excerpt: matterResult.data.excerpt,
		});
	}
	return posts;
}
