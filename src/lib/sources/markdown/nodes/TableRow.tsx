import type { Handler } from "../types";

import { ChildTree } from "./ChildTree";

export const TableRow: Handler<"tableRow"> = (props) => {
	return (
		<tr>
			<ChildTree children={props.children} />
		</tr>
	);
};
