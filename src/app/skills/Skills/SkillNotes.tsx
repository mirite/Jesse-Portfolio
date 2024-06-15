import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import React, { useEffect } from "react";

import { Button } from "@/app/components/";
import type { SkillSkeleton } from "@/lib/";
import NotesContent from "@/app/skills/Skills/NotesContent";

const SkillNotes = (
	props: SkillSkeleton["fields"] & { onClose: () => void },
): ReactElement => {
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
				<NotesContent
					name={props.name}
					notes={props.notes}
					projects={props.projects}
				/>
			</div>
		</div>
	);
};

export default SkillNotes;
