import type { ComponentProps } from "react";
import React from "react";

import { TextWrapper, RichTextRenderer } from "@/app/components";
import type { Post as PostType } from "@/lib";
import { getPrettyDate } from "@/lib";

type Props = Partial<Pick<PostType, "title" | "content" | "posted">> &
	Omit<ComponentProps<typeof TextWrapper>, "content">;

const Post = (post: Props) => {
	const { title, content, posted, ...rest } = post;
	return (
		<TextWrapper {...rest}>
			{title && <h1>{title}</h1>}
			{posted && <p>Posted: {getPrettyDate(posted)}</p>}
			{content && <RichTextRenderer content={content} />}
		</TextWrapper>
	);
};

export default Post;
