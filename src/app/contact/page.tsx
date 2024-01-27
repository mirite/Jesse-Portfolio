import React from "react";
import BioImage from "@/app/contact/BioImage";
import Socials from "./Socials";
import { getPlainTextContent, SnippetSkeleton } from "@/lib/";
import ContactForm from "@/app/contact/ContactForm/ContactForm";
import { PageWrapper } from "@/app/components/";

const Page = async () => {
	const { title } = await data();
	return (
		<PageWrapper title={title}>
			<div className="container">
				<div className="flex w-max mx-auto flex-col md:flex-row justify-between items-center md:items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0">
					<BioImage />
					<Socials />
				</div>
				<ContactForm />
			</div>
		</PageWrapper>
	);
};

const data = async () => {
	const title = await getPlainTextContent<SnippetSkeleton>(
		"6hDDlcnlG9gdoL8QClVPOw",
		"content",
	);
	return { title };
};

export async function generateMetadata() {
	return {
		title: "Contact",
		description: "",
	};
}

export default Page;
