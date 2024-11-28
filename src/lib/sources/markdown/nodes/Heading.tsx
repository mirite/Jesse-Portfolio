import type { Handler } from "../types";

import { ChildTree } from "./ChildTree";

export const Heading: Handler<"heading"> = (props) => {
	const Tag = `h${props.depth}` as keyof JSX.IntrinsicElements;
	return (
		<Tag>
			<ChildTree children={props.children} />
		</Tag>
	);
};