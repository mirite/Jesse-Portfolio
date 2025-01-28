import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "@/app/components/";
import type { Skill as SkillType } from "@/lib/skills";

import SkillNotes from "./SkillNotes";

const Skill = (skill: SkillType): ReactElement => {
	const { name, notes, proficiency } = skill;
	const [showing, setShowing] = useState(false);
	let className =
		"flex rounded-full leading-none bg-neutral-200 px-6 py-2 font-bold text-neutral-700 shadow-md dark:text-black";
	if (notes) {
		className = twMerge(
			className,
			"no-underline transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-hidden focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400",
		);
	}

	if (proficiency === "high") {
		className = twMerge(className, "bg-high dark:bg-high");
	} else if (proficiency === "medium") {
		className = twMerge(className, "bg-medium dark:bg-medium");
	} else if (proficiency === "starter") {
		className = twMerge(className, "bg-starter dark:bg-starter");
	}

	if (hasNotesOrLinks(skill)) {
		return (
			<li>
				<Button
					className={className}
					onClick={() => setShowing(true)}
					type={"button"}
				>
					<span className="mr-1">{name}</span>
					<FontAwesomeIcon icon={faCommentDots} />
				</Button>
				{showing ? (
					<SkillNotes {...skill} onClose={() => setShowing(false)} />
				) : null}
			</li>
		);
	}
	return (
		<li>
			<div className={className}>{name}</div>
		</li>
	);
};

export default Skill;

/**
 * Check if a skill has any notes or projects associated with it.
 *
 * @param skill The skill to check
 * @returns True if the skill has notes or projects.
 */
function hasNotesOrLinks(skill: SkillType) {
	return skill.notes !== undefined || skill.projects !== undefined;
}
