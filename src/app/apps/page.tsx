import type { Metadata, ResolvedMetadata } from "next";
import { type ReactElement } from "react";

import PageWrapper from "@/app/components/general/PageWrapper";

import App from "./App";


const defaultURLSuffix = ".app.jesseconner.ca";
const defaultGithubPrefix = "https://github.com/mirite/";
const defaultNpmPrefix = "https://www.npmjs.com/package/@mirite/";

const apps = [
	{
		name: "CSV Magic",
		url: `https://csvmagic${defaultURLSuffix}`,
		github: `${defaultGithubPrefix}csv-magic`,
		blog: "/blog/re-visiting-csv-magic",
	},
	{
		name: "SVG Magic",
		url: `https://svgmagic${defaultURLSuffix}`,
		github: `${defaultGithubPrefix}svg-magic`,
	},
	{
		name: "wordhecc",
		url: `https://wordhecc${defaultURLSuffix}`,
		github: `${defaultGithubPrefix}wordhecc`,
		blog: "/blog/wordhecc",
	},
	{
		name: "3D Label Helper",
		url: `https://models${defaultURLSuffix}/`,
		github: `${defaultGithubPrefix}bottle-helper`,
	},
	{
		name: "CSV to JSON Parser",
		github: `${defaultGithubPrefix}csv-json-parser`,
		npm: `${defaultNpmPrefix}csv-json-parser`,
		blog: "/blog/rust-csv-parser-for-javascript",
	},
	{
		name: "Sudoku Solver",
		github: `${defaultGithubPrefix}sudoku-solver`,
		blog: "/blog/sudoku-solver",
	},
	{
		name: "Web Crawler",
		github: `${defaultGithubPrefix}Node-Site-Crawler`,
		blog: "/blog/web-crawler",
		npm: `https://www.npmjs.com/package/simple-node-site-crawler`,
	},
	{
		name: "Site Archive",
		github: `${defaultGithubPrefix}site-archive`,
		npm: `https://www.npmjs.com/package/site-archive`,
	},
	{
		name: "Zod to Mongoose",
		github: `${defaultGithubPrefix}zod-to-mongoose`,
		npm: `${defaultNpmPrefix}zod-to-mongoose`,
	},
];

export type AppListing = (typeof apps)[number];

/** @returns The component. */
export default function Page(): ReactElement {
	return (
		<PageWrapper title={"Apps"}>
			<ul className={"space-y-2"}>
				{apps
					.sort((a, b) => a.name.localeCompare(b.name))
					.map((app) => (
						<li key={app.url}>
							<App app={app} />
						</li>
					))}
			</ul>
		</PageWrapper>
	);
}

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
		title: `${parentMetadata.title?.absolute} - Apps`,
		description: "A list of all the apps I have made.",
	};
}
