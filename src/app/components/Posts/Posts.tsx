import React from "react";
import { Card } from "@/app/components/";
import { Post } from "@/lib/";
interface Props {
  posts: Post[];
}
const Posts = (props: Props) => {
  const { posts } = props;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 max-w-screen-lg mx-auto">
      {posts.map((post) => (
        <Card
          key={post.slug}
          title={post.title}
          link={post.categorySlug + "/" + post.slug}
        />
      ))}
    </div>
  );
};

export default Posts;
