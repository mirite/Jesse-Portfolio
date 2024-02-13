import React from "react";
import { getContent, getSkills, SnippetSkeleton } from "@/lib/";
import Skills from "@/app/skills/Skills/Skills";
import { PageWrapper, TextWrapper } from "@/app/components/";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Page = async () => {
	const { content, skills } = await data();

	if (!content?.content || !content.label) return <p>Content not found</p>;
	return (
		<PageWrapper title={content.label || ""}>
			<TextWrapper>{documentToReactComponents(content.content)}</TextWrapper>
			<Skills skills={skills} />
		</PageWrapper>
	);
};

const data = async () => {
	const content = await getContent<SnippetSkeleton>("6F9MM2vNuE8Vc26iLFKnCO");
	const skills = await getSkills();
	return { content, skills };
};

export async function generateMetadata() {
	return {
		title: "Skills",
		description: "",
	};
}

export default Page;
