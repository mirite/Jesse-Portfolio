import React from "react";
import Card from "@/app/components/Posts/Card";
import { Post } from "@/types";
interface Props {
  posts: Post[];
}
const Posts = (props: Props) => {
  const { posts } = props;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {posts.map((post) => (
        <Card
          key={post.slug}
          title={post.title}
          link={post.category + "/" + post.slug}
        />
      ))}
    </div>
  );
};

export default Posts;
