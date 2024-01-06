import React from "react";
import { getPrettyDate, Post as PostType } from "@/lib";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { PageWrapper, TextWrapper } from "@/app/components";

interface Props
  extends Partial<Pick<PostType, "title" | "content" | "posted">> {}

const Post = (post: Props) => {
  const { title, content, posted } = post;
  return (
    <PageWrapper title={title || ""}>
      <TextWrapper>
        {posted && <p>Posted: {getPrettyDate(posted)}</p>}
        {content && <>{documentToReactComponents(content)}</>}
      </TextWrapper>
    </PageWrapper>
  );
};

export default Post;
