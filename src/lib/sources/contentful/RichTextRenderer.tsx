import type { Document, Node } from "@contentful/rich-text-types";
import type { ReactElement } from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

const renderOptions = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
			// render the EMBEDDED_ASSET as you need
			return (
				<Image
					alt={node.data.target.fields.description}
					height={node.data.target.fields.file.details.image.height}
					src={`https://${node.data.target.fields.file.url}`}
					width={node.data.target.fields.file.details.image.width}
				/>
			);
		},
		[BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
			// target the contentType of the EMBEDDED_ENTRY to display as you need
			if (node.data.target.sys.contentType.sys.id === "codeBlock") {
				return (
					<pre>
						<code>{node.data.target.fields.code}</code>
					</pre>
				);
			}

			if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
				return (
					<iframe
						allowFullScreen={true}
						frameBorder="0"
						height="100%"
						scrolling="no"
						src={node.data.target.fields.embedUrl}
						title={node.data.target.fields.title}
						width="100%"
					/>
				);
			}
		},

		[INLINES.EMBEDDED_ENTRY]: (node: Node) => {
			// target the contentType of the EMBEDDED_ENTRY to display as you need
			if (node.data.target.sys.contentType.sys.id === "blogPost") {
				return (
					<a href={`/blog/${node.data.target.fields.slug}`}>
						{" "}
						{node.data.target.fields.title}
					</a>
				);
			}
		},
	},
};

/**
 * Render rich text content from Contentful
 *
 * @param props The component props
 * @param props.content The document to render
 * @returns The component.
 */
export default function RichTextRenderer(props: {
	content: Document;
}): ReactElement {
	const { content } = props;

	return <>{documentToReactComponents(content, renderOptions)}</>;
}
