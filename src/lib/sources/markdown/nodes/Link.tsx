import type { Handler } from "../types";

import { ChildTree } from "./ChildTree";

export const Link: Handler<"link"> = (props) => {
	return (
		<a href={props.url} target="_blank" rel="noreferrer">
			<ChildTree children={props.children} />
		</a>
	);
};
