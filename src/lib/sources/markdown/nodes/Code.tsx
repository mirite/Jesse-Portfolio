import type { Handler } from "../types";

export const Code: Handler<"code"> = (props) => {
	return (
		<div className={"bg-black p-2 whitespace-pre text-white"}>
			<div>{props.lang}</div>
			{props.value}
		</div>
	);
};
