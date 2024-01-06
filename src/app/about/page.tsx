import React from "react";
import { getContent } from "@/app/helpers/connector";
import Post from "@/app/components/Posts/Post";
import { SnippetSkeleton } from "@/types";
import PageWrapper from "@/app/components/general/PageWrapper";

const Page = async () => {
  const { content } = await data();
  return (
    <PageWrapper title={content?.label || ""}>
      <Post content={content?.content} />
    </PageWrapper>
  );
};

const data = async () => {
  const content = await getContent<SnippetSkeleton>("iG7QQEKWeFbtsHLGpFvN9");
  return { content };
};

export async function generateMetadata() {
  return {
    title: "About",
    description: "",
  };
}

export default Page;
