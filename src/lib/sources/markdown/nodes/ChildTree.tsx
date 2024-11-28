import type { ReactElement } from "react";
import type { Root } from "remark-parse/lib";

import { nodeHandlers } from "./index";

type Props = { children: Root["children"] };

/**
 * Render the children of a node.
 *
 * @param props The props for the component.
 * @returns The rendered children.
 */
export function ChildTree(props: Props): ReactElement {
	const { children } = props;
	return (
		<>
			{children.map((node, index) => {
				const Handler = nodeHandlers[node.type];
				return <Handler key={index} {...node} />;
			})}
		</>
	);
}
