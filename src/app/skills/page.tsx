import React from "react";
import { getContent } from "@/app/helpers/connector";
import { Snippet } from "@/types";
import Post from "@/app/components/Posts/Post";
import Skills from "@/app/components/Skills/Skills";
import { getSkills } from "@/app/helpers/skills";

const Page = async () => {
  const { content, skills } = await data();
  return (
    <div>
      <h1>{content?.fields.label}</h1>
      <Post content={content?.fields.content} />
      <Skills skills={skills} />
    </div>
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
