import React from "react";
import { Post as PostType } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./Post.module.css";
import { getPrettyDate } from "@/app/helpers/stringTransforms";
import Gallery from "@/app/components/Gallery";
interface Props
  extends Partial<Pick<PostType, "title" | "content" | "posted" | "assets">> {}
const Post = (post: Props) => {
  const { title, content, posted, assets } = post;
  return (
    <div className="container">
      {title && <h1>{title}</h1>}
      {posted && <p>Posted: {getPrettyDate(posted)}</p>}
      {content && <>{documentToReactComponents(content)}</>}
      {assets?.length && <Gallery assets={assets} />}
    </div>
  );
};

export default Post;
