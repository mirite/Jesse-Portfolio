import type { Handler } from "../types";

export const Image: Handler<"image"> = (props) => {
	return <img alt={props.alt || ""} src={props.url} />;
};
