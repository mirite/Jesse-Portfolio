import type { ReactElement } from "react";
import type { Root } from "remark-parse/lib";

import type { Handler as HandlerType } from "../types";

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
				const Handler = getHandler(node.type);
				// This won't change after initial render.
				// eslint-disable-next-line react/no-array-index-key
				return <Handler key={index} {...node} />;
			})}
		</>
	);
}

/**
 * Get the handler for a node type.
 *
 * @template T The type of the node.
 * @param type The type of the node.
 * @returns The handler for the node.
 */
function getHandler<T extends Root["children"][number]["type"]>(
	type: T,
): HandlerType<T> {
	return nodeHandlers[type] as HandlerType<T>;
}
