"use server";
import * as fs from "node:fs";
import * as path from "node:path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import type { Post } from "@/lib/types";

const postsDirectory = path.resolve("src", "blogs");
/**
 * Gets the local posts from the file system.
 *
 * @returns The local posts.
 */
export async function getLocalPosts(): Promise<Omit<Post<string>, "source">[]> {
	const files = await fs.promises.readdir(postsDirectory);
	const posts: Omit<Post<string>, "source">[] = [];

	for (const file of files) {
		const content = await fs.promises.readFile(
			path.join(postsDirectory, file),
			"utf8",
		);
		const matterResult = matter(content);

		const processedContent = await remark()
			.use(html)
			.process(matterResult.content);
		const contentHtml = processedContent.toString();

		posts.push({
			posted: matterResult.data.posted,
			title: matterResult.data.title,
			slug: file.replace(/\.md$/, ""),
			content: contentHtml,
			categorySlug: matterResult.data.category,
			excerpt: matterResult.data.excerpt,
		});
	}
	return posts;
}
