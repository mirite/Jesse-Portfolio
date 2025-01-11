import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

import { TextWrapper , PageWrapper, Posts } from "@/app/components";
import { getPosts } from "@/lib";
import { getPlainTextContent } from "@/lib/sources/contentful/connector";

/**
 * The home page.
 *
 * @returns The home page.
 */
export default async function Home(): Promise<ReactElement> {
	const title = await getPlainTextContent("5elXtJ9BtgyNW3u0qrTzxy", "content");
	const posts = (await getPosts(6)) || [];
	return (
		<PageWrapper title={title} className={"flex flex-col gap-4"}>
			<div className={"flex flex-col items-center gap-4 lg:flex-row"}>
				<Image
					src={""}
					width={300}
					height={300}
					alt={""}
					className={"lg:order-2"}
				/>
				<TextWrapper>
					<h2>About Me</h2>
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
			</div>
			<TextWrapper className={"ml-0"}>
				<h2 className={"mb-3"}>Most Recent Posts</h2>
			</TextWrapper>
			<Posts posts={posts} />
		</PageWrapper>
	);
}

/**
 * Generates the metadata for the home page.
 *
 * @returns The metadata.
 */
export function generateMetadata(): { title: string; description: string } {
	return {
		title: "Jesse Conner",
		description:
			"Hello all! My name is Jesse Conner, and I am from Toronto, Ontario. I am passionate about programming, mental health, and getting outdoors to explore the area around me while getting steps. I made this site to share my projects, photos, and all of the opinions that the people that know me are already sick of.",
	};
}
