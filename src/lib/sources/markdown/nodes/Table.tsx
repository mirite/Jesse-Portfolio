import type { Handler } from "../types";

import { ChildTree } from "./ChildTree";

export const Table: Handler<"table"> = (props) => {
	return (
		<table>
			<ChildTree children={props.children} />
		</table>
	);
};
