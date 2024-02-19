import { getPlainTextContent, getPosts } from "@/lib/";
import { PageWrapper, Posts } from "@/app/components/";
import Link from "next/link";
import { TextWrapper } from "@/app/components";

export default async function Home() {
	const { props } = await data();
	const { title, posts } = props;
	return (
		<PageWrapper title={title} className={"flex gap-4 flex-col"}>
			<TextWrapper>
				<p>
					Welcome to my site! I am a software developer (primarily web) from
					Toronto, Ontario. This site is a place for me to share my&nbsp;
					<Link href={"/skills"}>skills</Link>,&nbsp;
					<Link href={"/projects"}>projects</Link>, and tell a little&nbsp;
					<Link href={"/about"}>about myself</Link>.
				</p>
				<p>
					As a very brief summary, I am a full-stack developer with a focus in
					PHP/WordPress and React. I am also always looking to expand my skill
					set, so I have dabbled (and more) in a variety of other languages,
					frameworks, and tools.
				</p>
			</TextWrapper>
			<TextWrapper>
				<h2 className={"mb-3 text-center"}>Most recent posts:</h2>
			</TextWrapper>
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
		description:
			"Hello all! My name is Jesse Conner, and I am from Toronto, Ontario. I am passionate about programming, mental health, and getting outdoors to explore the area around me while getting steps. I made this site to share my projects, photos, and all of the opinions that the people that know me are already sick of.",
	};
}
