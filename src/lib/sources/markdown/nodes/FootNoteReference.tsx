import type { Handler } from "../types";

export const FootNoteReference: Handler<"footnoteReference"> = (props) => {
	return <sup>{props.identifier}</sup>;
};
