import type { Metadata, ResolvedMetadata } from "next";
import Link from "next/link";
import React, { type ReactElement } from "react";

import { TextWrapper, PageWrapper, Post } from "@/app/components";
import { getSnippet } from "@/lib/snippets";
import contentful from "@/lib/sources/contentful";

const Page = async (): Promise<ReactElement> => {
	const content = await getSnippet("iG7QQEKWeFbtsHLGpFvN9");

	return (
		<PageWrapper title={content.label || ""}>
			<Post
				content={content.content}
				className={"mb-4"}
				title={""}
				source={contentful}
				posted={""}
			/>
			<TextWrapper>
				<p>
					<Link href={"/contact"}>Want to get in touch?</Link>
				</p>
			</TextWrapper>
		</PageWrapper>
	);
};

/**
 * Generates the metadata for the page.
 *
 * @param _ The page parameters.
 * @param parent The parent metadata.
 * @returns The metadata.
 */
export async function generateMetadata(
	_: unknown,
	parent: Promise<ResolvedMetadata>,
): Promise<Metadata> {
	const parentMetadata = await parent;
	return {
		title: `${parentMetadata.title?.absolute} - About`,
		description: "All about me.",
	};
}

export default Page;
