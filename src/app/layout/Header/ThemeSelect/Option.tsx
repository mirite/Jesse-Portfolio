import React, { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/app/components/";
import { OptionDefinition } from "@/lib/";
import { PressEvent } from "@react-types/shared";

type OptionProps = OptionDefinition & {
	onPress: (e: PressEvent) => void;
};

const Option = (props: OptionProps) => {
	const { label, icon, onPress } = props;
	const id = useId();
	return (
		<li>
			<Button
				name={"darkModeToggle"}
				className="block w-full"
				id={id}
				onPress={(e) => onPress(e)}
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
