import Link from "next/link";
import React from "react";

import { TextWrapper } from "@/app/components";
import { PageWrapper, Post } from "@/app/components/";
import type { SnippetSkeleton } from "@/lib/";
import { getContent } from "@/lib/";

const Page = async () => {
	const { content } = await data();
	return (
		<PageWrapper title={content?.label || ""}>
			<Post content={content?.content} className={"mb-4"} />
			<TextWrapper>
				<p>
					<Link href={"/contact"}>Want to get in touch?</Link>
				</p>
			</TextWrapper>
		</PageWrapper>
	);
};

const data = async () => {
	const content = await getContent<SnippetSkeleton>("iG7QQEKWeFbtsHLGpFvN9");
	return { content };
};

export async function generateMetadata() {
	return {
		title: "About",
		description: "",
	};
}

export default Page;
