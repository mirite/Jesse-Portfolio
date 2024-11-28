import type { FC } from "react";
import type { Root } from "remark-parse/lib";

export type Node = Root["children"][number];
export type NodeType = Node["type"];

export type HandlerProps<T extends NodeType> = Extract<Node, { type: T }>;
export type Handler<T extends NodeType> = FC<HandlerProps<T>>;

export type Handlers = {
	[key in NodeType]: Handler<key>;
};
