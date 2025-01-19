import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Metadata, ResolvedMetadata } from "next";
import type { ReactElement } from "react";
import React from "react";

import { PageWrapper, TextWrapper } from "@/app/components/";
import { getSkills } from "@/lib/skills";
import { getSnippet } from "@/lib/snippets";

import Skills from "./Skills/Skills";

const Page = async (): Promise<ReactElement> => {
	const { content, skills } = await data();

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
	const content = await getSnippet("6F9MM2vNuE8Vc26iLFKnCO");
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
