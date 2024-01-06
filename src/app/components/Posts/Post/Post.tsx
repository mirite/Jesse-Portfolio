import React from "react";
import { Post as PostType } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getPrettyDate } from "@/app/helpers/stringTransforms";
import PageWrapper from "@/app/components/general/PageWrapper";
import TextWrapper from "@/app/components/general/TextWrapper";
interface Props
  extends Partial<Pick<PostType, "title" | "content" | "posted">> {}
const Post = (post: Props) => {
  const { title, content, posted } = post;
  return (
    <PageWrapper title={title || ""}>
      <TextWrapper>
        {posted && <p>Posted: {getPrettyDate(posted)}</p>}
        {content && <>{documentToReactComponents(content)}</>}
        {/*{assets && assets?.length > 0 && <Gallery assets={assets} />}*/}
      </TextWrapper>
    </PageWrapper>
  );
};

export default Post;
