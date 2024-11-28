import type { Handler } from "../types";

import { ChildTree } from "./ChildTree";

export const Blockquote: Handler<"blockquote"> = (props) => {
	return (
		<blockquote>
			<ChildTree children={props.children} />
		</blockquote>
	);
};
