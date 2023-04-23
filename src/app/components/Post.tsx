import React from 'react';
import {Post as PostType} from "@/types";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

interface Props extends PostType {}
const Post = (post: Props) => {
    const {title, content, posted} = post;
    return (
        <div>
            <h1>{title}</h1>
            {documentToReactComponents(content)}
        </div>
    );
};

export default Post;
