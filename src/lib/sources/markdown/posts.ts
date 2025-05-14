"use server";
import type { Root } from "remark-parse/lib";

import matter from "gray-matter";
import * as fs from "node:fs";
import * as path from "node:path";
import codeblocks from "remark-code-blocks";
import parser from "remark-parse";
import { unified } from "unified";

import type { Post } from "../types";

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
			categorySlug: matterResult.data.category,
			content: parsedContent,
			excerpt: matterResult.data.excerpt,
			posted: matterResult.data.posted,
			slug: file.replace(/\.md$/, ""),
			title: matterResult.data.title,
		});
	}
	return posts;
}
