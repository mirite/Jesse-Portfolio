import type { Root } from "mdast";
import type { FC } from "react";

export type Handler<T extends NodeType> = FC<HandlerProps<T>>;
export type HandlerProps<T extends NodeType> = Extract<Node, { type: T }>;

export type Handlers = {
	[key in NodeType]: Handler<key>;
};
export type Node = Root["children"][number];

export type NodeType = Node["type"];
