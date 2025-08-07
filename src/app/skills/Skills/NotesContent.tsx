import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import React, { type ReactElement } from "react";

import { TextWrapper } from "@/app/components";
import LinkDisplay from "@/app/skills/Skills/LinkDisplay";

type Props = {
	name: string;
	notes: Document | undefined;
	projects: string[] | undefined;
};

/**
 * The notes and projects for a skill.
 *
 * @param props The props for the component.
 * @returns The component.
 */
export default function NotesContent(props: Props): ReactElement {
	return (
		<TextWrapper>
			<div className="mb-2 flex items-start justify-between font-bold">
				<h3>{props.name}</h3>
			</div>
			{props.notes ? (
				<div>
					<h4>Details</h4>
					<article>{documentToReactComponents(props.notes)}</article>
				</div>
			) : null}
			{props.projects ? <LinkDisplay links={props.projects} /> : null}
		</TextWrapper>
	);
}
