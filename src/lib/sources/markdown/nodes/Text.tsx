import type { Handler } from "../types";

export const Text: Handler<"text"> = (props) => {
	return props.value;
};
