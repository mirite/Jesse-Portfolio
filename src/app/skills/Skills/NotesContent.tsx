import React, { type ReactElement } from "react";
import { TextWrapper } from "@/app/components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import LinkDisplay from "@/app/skills/Skills/LinkDisplay";
import type { Document } from "@contentful/rich-text-types";

type Props = {
	name: string;
	notes: Document | undefined;
	projects: Record<string, string> | undefined;
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
			{props.notes && (
				<article>{documentToReactComponents(props.notes)}</article>
			)}
			{props.projects && <LinkDisplay links={props.projects} />}
		</TextWrapper>
	);
}
