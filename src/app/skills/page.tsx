import React from "react";
import { getContent } from "@/app/helpers/connector";
import { SnippetSkeleton } from "@/types";
import Skills from "@/app/components/Skills/Skills";
import { getSkills } from "@/app/helpers/skills";
import PageWrapper from "@/app/components/general/PageWrapper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import TextWrapper from "@/app/components/general/TextWrapper";

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
