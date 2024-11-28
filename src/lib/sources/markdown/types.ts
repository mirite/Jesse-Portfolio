import type { FC } from "react";
import type { Root } from "remark-parse/lib";

export type Handler<T extends Root["children"][number]["type"]> = FC<
	Extract<Root["children"][number], { type: T }> & { key: string | number }
>;
export type Handlers = {
	[key in Root["children"][number]["type"]]: Handler<key>;
};
