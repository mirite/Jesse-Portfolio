import React from "react";
import { getContent, SnippetSkeleton } from "@/lib/";
import { PageWrapper, Post } from "@/app/components/";

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
