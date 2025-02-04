//TODO: Fix the cast to string[] the type in SkillSkeleton is wrong
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import React, { useEffect } from "react";

import { Button } from "@/app/components/";
import NotesContent from "@/app/skills/Skills/NotesContent";
import type { SkillSkeleton } from "@/lib/skills";

const SkillNotes = (
	props: SkillSkeleton["fields"] & { onClose: () => void },
): ReactElement => {
	useEffect(() => {
		document.body.style.overflowY = "hidden";
		return () => {
			document.body.style.overflowY = "unset";
		};
	}, []);
	const { name, notes, projects } = props;
	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-xs"
			onClick={props.onClose}
		>
			<div
				className="max-w-fit min-w-96 rounded-md bg-white p-6 shadow-2xl dark:bg-black"
				onClick={(e) => e.stopPropagation()}
			>
				<Button
					className="float-right p-1 leading-none"
					onClick={props.onClose}
				>
					<FontAwesomeIcon
						className={"size-8 hover:bg-transparent"}
						icon={faCircleXmark}
					/>
				</Button>
				<NotesContent
					name={name}
					notes={notes}
					projects={projects as unknown as string[]}
				/>
			</div>
		</div>
	);
};

export default SkillNotes;
