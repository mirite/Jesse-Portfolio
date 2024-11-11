import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Metadata, ResolvedMetadata } from "next";
import type { ReactElement } from "react";
import React from "react";

import { PageWrapper, TextWrapper } from "@/app/components/";
import Skills from "@/app/skills/Skills/Skills";
import type { SnippetSkeleton } from "@/lib/";
import { getContent, getSkills } from "@/lib/";

const Page = async (): Promise<ReactElement> => {
	const { content, skills } = await data();

	if (!content?.content || !content.label) return <p>Content not found</p>;
	return (
		<PageWrapper title={content.label || ""}>
			<TextWrapper className={"mb-4"}>
				{documentToReactComponents(content.content)}
			</TextWrapper>
			<Skills skills={skills} />
		</PageWrapper>
	);
};

const data = async () => {
	const content = await getContent<SnippetSkeleton>("6F9MM2vNuE8Vc26iLFKnCO");
	const skills = await getSkills();
	return { content, skills };
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
		title: `${parentMetadata.title?.absolute} - Skills`,
		description: "A subset of the skills I have.",
	};
}

export default Page;
