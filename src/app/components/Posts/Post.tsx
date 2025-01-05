import type { ComponentProps, ReactElement } from "react";
import React from "react";

import { TextWrapper } from "@/app/components";
import type { Post as PostType } from "@/lib";
import { getPrettyDate } from "@/lib";

type Props<T> = Pick<PostType<T>, "title" | "content" | "posted" | "source"> &
	Omit<ComponentProps<typeof TextWrapper>, "content">;

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
