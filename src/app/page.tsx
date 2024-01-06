import { getPlainTextContent, getPosts } from "@/lib/";
import { PageWrapper, Posts } from "@/app/components/";

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
  const title = await getPlainTextContent("5elXtJ9BtgyNW3u0qrTzxy", "content");
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
