import { getRichTextContent } from "@/app/helpers/connector";
import Posts from "@/app/components/Posts";
import { getPosts } from "@/app/helpers/posts";

export default async function Home() {
  const { props } = await data();
  const { title, posts } = props;
  return (
    <div>
      <div className="text-3xl font-bold underline">Blah{title}</div>
      <div>
        <Posts posts={posts} />
      </div>
    </div>
  );
}

const data = async () => {
  const title = await getRichTextContent("5elXtJ9BtgyNW3u0qrTzxy", "content");
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
