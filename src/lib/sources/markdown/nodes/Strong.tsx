import type { Handler } from "../types";
import { ChildTree } from "./ChildTree";

export const Strong: Handler<"strong"> = (props) => (
	<strong>
		<ChildTree children={props.children} />
	</strong>
);
