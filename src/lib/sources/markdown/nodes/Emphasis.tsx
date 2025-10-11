import type { Handler } from "../types";
import { ChildTree } from "./ChildTree";

export const Emphasis: Handler<"emphasis"> = (props) => (
	<em>
		<ChildTree children={props.children} />
	</em>
);
