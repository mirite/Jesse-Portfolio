import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

import { Button, TextWrapper } from "@/app/components/";
import LinkDisplay from "@/app/skills/Skills/LinkDisplay";
import type { SkillSkeleton } from "@/lib/";

const SkillNotes = (
	props: SkillSkeleton["fields"] & { onClose: () => void },
) => {
	useEffect(() => {
		document.body.style.overflowY = "hidden";
		return () => {
			document.body.style.overflowY = "unset";
		};
	}, []);
	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm"
			onClick={props.onClose}
		>
			<div
				className="w-2/3 rounded-md bg-white p-3 dark:bg-black"
				onClick={(e) => e.stopPropagation()}
			>
				<Button
					className="float-right p-1 leading-none"
					onClick={props.onClose}
				>
					<FontAwesomeIcon icon={faCircleXmark} />
				</Button>
				<TextWrapper>
					<div className="mb-2 flex items-start justify-between font-bold">
						<h3>{props.name}</h3>
					</div>
					{props.notes && (
						<article>{documentToReactComponents(props.notes)}</article>
					)}
					{props.projects && <LinkDisplay links={props.projects} />}
				</TextWrapper>
			</div>
		</div>
	);
};

export default SkillNotes;
