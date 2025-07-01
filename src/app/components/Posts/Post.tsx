import type { ComponentProps, ReactElement } from "react";

import React from "react";

import type { Post as PostType } from "@/lib/sources";

import { TextWrapper } from "@/app/components";
import { getPrettyDate } from "@/lib";

type Props<T> = Omit<ComponentProps<typeof TextWrapper>, "content"> &
	Pick<PostType<T>, "content" | "posted" | "source" | "title">;

/**
 * The display of a single post
 *
 * @template T The PostType
 * @param post The post to display
 * @returns The Post component
 */
function Post<T>(post: Props<T>): ReactElement {
	const { content, posted, source } = post;
	const Component = source.Component;
	return (
		<TextWrapper className={"mx-auto"}>
			{posted ? <div>Posted: {getPrettyDate(posted)}</div> : null}
			{content ? <Component content={content} /> : null}
		</TextWrapper>
	);
}

export default Post;
