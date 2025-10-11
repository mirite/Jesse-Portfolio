import type { Handler } from "../types";
import { ChildTree } from "./ChildTree";

export const Delete: Handler<"delete"> = (props) => {
	return (
		<del>
			<ChildTree children={props.children} />
		</del>
	);
};
