import React from 'react';
import {Post as PostType} from "@/types";

interface Props extends PostType {}
const Post = (post: Props) => {
    const {title, content, date} = post;
    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content || ""}}></div>
        </div>
    );
};

export default Post;
