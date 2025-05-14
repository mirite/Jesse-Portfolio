import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { type ReactElement } from "react";

import type { AppListing } from "@/lib/apps";

type Props = {
	app: AppListing;
};

/**
 * An app that I've made.
 *
 * @param props The props for the component.
 * @returns The component.
 */
export default function App(props: Props): ReactElement {
	const { app } = props;
	return (
		<div className={"flex items-center gap-2"}>
			{app.url ? (
				<Link className={"text-xl"} href={app.url} target={"_blank"}>
					{app.name}
				</Link>
			) : (
				<span className={"text-xl"}>{app.name}</span>
			)}
			<Link href={app.github} target={"_blank"}>
				<FontAwesomeIcon
					className={"size-6"}
					icon={faGithub}
					title={"Source on GitHub"}
				/>
			</Link>
			{app.blog ? (
				<Link href={app.blog} target={"_blank"}>
					<FontAwesomeIcon
						className={"size-6"}
						icon={faNoteSticky}
						title={"Blog Post"}
					/>
				</Link>
			) : null}
			{app.npm ? (
				<Link href={app.npm} target={"_blank"}>
					<FontAwesomeIcon
						className={"size-6"}
						icon={faNpm}
						title={"NPM Package"}
					/>
				</Link>
			) : null}
		</div>
	);
}
