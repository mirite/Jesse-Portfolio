import type { Handler } from "../types";

export const InlineCode: Handler<"inlineCode"> = (props) => {
	return <span className={"bg-black p-2 text-white"}>{props.value}</span>;
};
