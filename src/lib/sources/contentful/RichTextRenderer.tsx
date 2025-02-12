import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document, Node } from "@contentful/rich-text-types";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import type { ReactElement } from "react";

const renderOptions = {
	renderNode: {
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
						src={node.data.target.fields.embedUrl}
						height="100%"
						width="100%"
						frameBorder="0"
						scrolling="no"
						title={node.data.target.fields.title}
						allowFullScreen={true}
					/>
				);
			}
		},

		[BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
			// render the EMBEDDED_ASSET as you need
			return (
				<Image
					src={`https://${node.data.target.fields.file.url}`}
					height={node.data.target.fields.file.details.image.height}
					width={node.data.target.fields.file.details.image.width}
					alt={node.data.target.fields.description}
				/>
			);
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
