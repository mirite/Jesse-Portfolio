import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { type ReactElement } from "react";

import type { AppListing } from "./page";

type Props = {
	app: AppListing;
};

/**
 *
 *
 * @param props The props for the component.
 * @returns The component.
 */
export default function App(props: Props): ReactElement {
	const { app } = props;
	return (
		<div className={"flex items-center gap-2"}>
			{app.url ? (
				<Link href={app.url} className={"text-xl"} target={"_blank"}>
					{app.name}
				</Link>
			) : (
				<span className={"text-xl"}>{app.name}</span>
			)}
			<Link href={app.github} target={"_blank"}>
				<FontAwesomeIcon
					title={"Source on GitHub"}
					icon={faGithub}
					className={"size-6"}
				/>
			</Link>
			{app.blog ? <Link href={app.blog} target={"_blank"}>
					<FontAwesomeIcon
						title={"Blog Post"}
						icon={faNoteSticky}
						className={"size-6"}
					/>
				</Link> : null}
			{app.npm ? <Link href={app.npm} target={"_blank"}>
					<FontAwesomeIcon
						title={"NPM Package"}
						icon={faNpm}
						className={"size-6"}
					/>
				</Link> : null}
		</div>
	);
}
