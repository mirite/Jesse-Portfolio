import type { Handler } from "../types";

export const Image: Handler<"image"> = (props) => {
	return <img src={props.url} alt={props.alt || ""} />;
};
