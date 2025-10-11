import type { Handler } from "../types";
import { ChildTree } from "./ChildTree";

export const List: Handler<"list"> = (props) => {
	const Tag = props.ordered ? "ol" : "ul";
	return (
		<Tag>
			<ChildTree children={props.children} />
		</Tag>
	);
};
