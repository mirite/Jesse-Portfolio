import type { ReactElement } from "react";
import React from "react";

import Socials from "./Socials";

import { PageWrapper } from "@/app/components/";
import BioImage from "@/app/contact/BioImage";
import ContactForm from "@/app/contact/ContactForm/ContactForm";
import type { SnippetSkeleton } from "@/lib/";
import { getPlainTextContent } from "@/lib/";

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
 *
 */
export function generateMetadata(): { title: string; description: string } {
	return {
		title: "Contact",
		description: "",
	};
}

export default Page;
