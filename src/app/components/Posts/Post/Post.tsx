import React from "react";
import { Post as PostType } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./Post.module.css";
import { getPrettyDate } from "@/app/helpers/stringTransforms";
import Gallery from "@/app/components/Gallery/Gallery";
import PageWrapper from "@/app/components/PageWrapper";
interface Props
  extends Partial<Pick<PostType, "title" | "content" | "posted" | "assets">> {}
const Post = (post: Props) => {
  const { title, content, posted, assets } = post;
  return (
    <PageWrapper title={title || ""}>
      <div className="container">
        {posted && <p>Posted: {getPrettyDate(posted)}</p>}
        {content && <>{documentToReactComponents(content)}</>}
        {assets && assets?.length > 0 && <Gallery assets={assets} />}
      </div>
    </PageWrapper>
  );
};

export default Post;
