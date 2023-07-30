import { getRichTextContent } from "@/app/helpers/connector";
import Posts from "@/app/components/Posts";
import { getPosts } from "@/app/helpers/posts";
import PageWrapper from "@/app/components/PageWrapper";

export default async function Home() {
  const { props } = await data();
  const { title, posts } = props;
  return (
      <PageWrapper title={title}>
        <Posts posts={posts} />
      </PageWrapper>
  );
}

const data = async () => {
  const title = await getRichTextContent("5elXtJ9BtgyNW3u0qrTzxy", "content") as string;
  const posts = (await getPosts(10)) || [];
  return {
    props: {
      title,
      posts,
    },
  };
};

export async function generateMetadata() {
  return {
    title: "Jesse Conner",
    description: "",
  };
}
