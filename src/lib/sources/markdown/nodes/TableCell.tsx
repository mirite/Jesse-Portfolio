import type { Handler } from "../types";
import { ChildTree } from "./ChildTree";

export const TableCell: Handler<"tableCell"> = (props) => {
	return (
		<td>
			<ChildTree children={props.children} />
		</td>
	);
};
