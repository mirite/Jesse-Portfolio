import type { Handler } from "../types";

export const Code: Handler<"code"> = (props) => {
return (
		<div className={"whitespace-pre bg-black p-2 text-white"}>
			<div class="">{props.lang}</div>
			{props.value}
		</div>
	);
};
