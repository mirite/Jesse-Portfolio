import type { Handler } from "../types";
import { ChildTree } from "./ChildTree";

export const Paragraph: Handler<"paragraph"> = (props) => {
	return (
		<p>
			<ChildTree children={props.children} />
		</p>
	);
};
