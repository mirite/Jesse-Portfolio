import React from "react";
import { getContent } from "@/app/helpers/connector";
import Post from "@/app/components/Posts/Post";
import { Snippet } from "@/types";
import PageWrapper from "@/app/components/PageWrapper";

const Page = async () => {
  const { content } = await data();
  return (
    <PageWrapper title={content?.fields.label || ""}>
      <Post content={content?.fields.content} />
    </PageWrapper>
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
