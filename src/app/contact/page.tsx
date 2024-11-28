import type { Metadata, ResolvedMetadata } from "next";
import type { ReactElement } from "react";
import React from "react";

import Socials from "./Socials";

import { PageWrapper } from "@/app/components/";
import BioImage from "@/app/contact/BioImage";
import ContactForm from "@/app/contact/ContactForm/ContactForm";
import type { SnippetSkeleton } from "@/lib/";
import { getPlainTextContent } from "@/lib/sources/contentful/connector";

const Page = async (): Promise<ReactElement> => {
	const title = await getPlainTextContent<SnippetSkeleton>(
		"6hDDlcnlG9gdoL8QClVPOw",
		"content",
	);
	return (
		<PageWrapper title={title}>
			<div className="container">
				<div className="mx-auto flex w-max flex-col items-center justify-between space-x-0 space-y-4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
					<BioImage />
					<Socials />
				</div>
				<ContactForm />
			</div>
		</PageWrapper>
	);
};

/**
 * Generates the metadata for the page.
 *
 * @param _ The page parameters.
 * @param parent The parent metadata.
 * @returns The metadata.
 */
export async function generateMetadata(
	_: unknown,
	parent: Promise<ResolvedMetadata>,
): Promise<Metadata> {
	const parentMetadata = await parent;
	return {
		title: `${parentMetadata.title?.absolute} - Contact`,
		description: "How to get in touch with me.",
	};
}

export default Page;
