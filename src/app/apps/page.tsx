import type { Metadata, ResolvedMetadata } from "next";
import { type ReactElement } from "react";

import PageWrapper from "@/app/components/general/PageWrapper";
import { getApps } from "@/lib/apps";
import App from "./App";

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
		description: "A list of all the apps I have made.",
		title: `${parentMetadata.title?.absolute} - Apps`,
	};
}

/** @returns The component. */
export default function Page(): ReactElement {
	const apps = getApps();
	return (
		<PageWrapper title={"Apps"}>
			<ul className={"space-y-2"}>
				{apps.map((app) => (
					<li key={app.name}>
						<App app={app} />
					</li>
				))}
			</ul>
		</PageWrapper>
	);
}
