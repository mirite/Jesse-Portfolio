import type { Handler } from "../types";
import { ChildTree } from "./ChildTree";

export const ListItem: Handler<"listItem"> = (props) => {
	return (
		<li>
			<ChildTree children={props.children} />
		</li>
	);
};
