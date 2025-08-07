import type { Handler } from "../types";
import { ChildTree } from "./ChildTree";

export const Link: Handler<"link"> = (props) => {
	return (
		<a href={props.url} rel="noreferrer" target="_blank">
			<ChildTree children={props.children} />
		</a>
	);
};
