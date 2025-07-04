import type { Metadata, ResolvedMetadata } from "next";
import type { ReactElement } from "react";

import React from "react";

import { PageWrapper } from "@/app/components/";
import BioImage from "@/app/contact/BioImage";
import ContactForm from "@/app/contact/ContactForm/ContactForm";

import Socials from "./Socials";

const Page = async (): Promise<ReactElement> => {
	return (
		<PageWrapper title={"Contact"}>
			<div className="container">
				<div className="mx-auto flex w-max flex-col items-center justify-between space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4">
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
		description: "How to get in touch with me.",
		title: `${parentMetadata.title?.absolute} - Contact`,
	};
}

export default Page;
