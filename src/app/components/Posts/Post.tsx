import type { ComponentProps, ReactElement } from "react";
import React from "react";

import { TextWrapper, RichTextRenderer } from "@/app/components";
import type { Post as PostType } from "@/lib";
import { getPrettyDate } from "@/lib";

type Props = Partial<Pick<PostType, "title" | "content" | "posted">> &
	Omit<ComponentProps<typeof TextWrapper>, "content">;

const Post = (post: Props): ReactElement => {
	const { content, posted } = post;
	return (
		<TextWrapper>
			{posted && (
				<div className={"text-center"}>Posted: {getPrettyDate(posted)}</div>
			)}
			{content && <RichTextRenderer content={content} />}
		</TextWrapper>
	);
};

export default Post;
