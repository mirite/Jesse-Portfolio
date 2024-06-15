import Link from "next/link";
import React, { type ReactElement } from "react";

import { TextWrapper } from "@/app/components";
import { PageWrapper, Post } from "@/app/components/";
import type { SnippetSkeleton } from "@/lib/";
import { getContent } from "@/lib/";

const Page = async (): Promise<ReactElement> => {
	const content = await getContent<SnippetSkeleton>("iG7QQEKWeFbtsHLGpFvN9");
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

export function generateMetadata(): { title: "About"; description: "" } {
	return {
		title: "About",
		description: "",
	};
}

export default Page;
