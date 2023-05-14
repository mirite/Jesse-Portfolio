import React from "react";
import { getContent } from "@/app/helpers/connector";
import Post from "@/app/components/Posts/Post";
import { Snippet } from "@/types";

const Page = async () => {
  const { content } = await data();
  return (
    <div>
      <h1>{content?.fields.label}</h1>
      <Post content={content?.fields.content} />
    </div>
  );
};

const data = async () => {
  const content = await getContent<Snippet>("iG7QQEKWeFbtsHLGpFvN9");
  return { content };
};

export async function generateMetadata() {
  return {
    title: "About",
    description: "",
  };
}

export default Page;
