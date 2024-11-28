import type { FC } from "react";
import type { Root } from "remark-parse/lib";

export type Handler<T extends NodeType> = FC<
	Extract<Root["children"][number], { type: T }> & { key: string | number }
>;

export type Handlers = {
	[key in NodeType]: Handler<key>;
};

export type NodeType = Root["children"][number]["type"];
