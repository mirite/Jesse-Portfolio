import React from "react";
import { getContent } from "@/app/helpers/connector";
import { Snippet } from "@/types";
import Post from "@/app/components/Posts/Post";
import Skills from "@/app/components/Skills/Skills";
import { getSkills } from "@/app/helpers/skills";
import PageWrapper from "@/app/components/PageWrapper";

const Page = async () => {
  const { content, skills } = await data();
  return (
    <PageWrapper title={content?.fields.label || ""}>
      <Post content={content?.fields.content} />
      <Skills skills={skills} />
    </PageWrapper>
  );
};

const data = async () => {
  const content = await getContent<Snippet>("6F9MM2vNuE8Vc26iLFKnCO");
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
