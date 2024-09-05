import type { ComponentProps, ReactElement } from "react";
import React from "react";

import { TextWrapper, RichTextRenderer } from "@/app/components";
import type { Post as PostType } from "@/lib";
import { getPrettyDate } from "@/lib";

type Props = Partial<Pick<PostType, "title" | "content" | "posted">> &
	Omit<ComponentProps<typeof TextWrapper>, "content">;

const Post = (post: Props): ReactElement => {
	const { content, posted, ...rest } = post;
	return (
		<TextWrapper {...rest}>
			{posted && <p>Posted: {getPrettyDate(posted)}</p>}
			{content && <RichTextRenderer content={content} />}
		</TextWrapper>
	);
};

export default Post;
