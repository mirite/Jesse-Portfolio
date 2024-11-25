import React, { type ReactElement } from "react";

type Props = {
	content: string;
};

/**
 *
 *
 * @param props The props for the component.
 * @returns The component.
 */
export default function MdPost(props: Props): ReactElement {
	const { content } = props;
	return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
