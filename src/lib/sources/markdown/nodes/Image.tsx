import type { Handler } from "../types";

export const Image: Handler<"image"> = (props) => {
	// eslint-disable-next-line @next/next/no-img-element
	return <img alt={props.alt || ""} src={props.url} />;
};
