import React, { useId, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/app/components/";
import { OptionDefinition } from "@/lib/";

type OptionProps = OptionDefinition & {
	onClick: (e: MouseEvent) => void;
};

const Option = (props: OptionProps) => {
	const { label, icon, onClick } = props;
	const id = useId();
	return (
		<li>
			<Button
				name={"darkModeToggle"}
				className="block w-full"
				id={id}
				onClick={(e) => onClick(e)}
			>
				<div className="flex items-center gap-2">
					<FontAwesomeIcon icon={icon} />
					<div>{label}</div>
				</div>
			</Button>
		</li>
	);
};

export default Option;
