import type { ReactElement } from "react";
import type { Root } from "remark-parse/lib";

import { ChildTree } from "./nodes/ChildTree";

type Props = {
	content: Root;
};

/**
 *
 *
 * @param props The props for the component.
 * @returns The component.
 */
export default function MdPost(props: Props): ReactElement {
	const { content } = props;
	return (
		<div>
			<ChildTree children={content.children} />
		</div>
	);
}
