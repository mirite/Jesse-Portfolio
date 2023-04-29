import React from 'react';
import {Post as PostType} from "@/types";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import styles from './Post.module.css';
import {getPrettyDate} from "@/app/helpers/stringTransforms";
interface Props extends Partial<Pick<PostType, 'title' | 'content'| 'posted'>> {}
const Post = (post: Props) => {
    const {title, content, posted} = post;
    return (
        <div className="container">
            {title && <h1>{title}</h1>}
            {posted && <p>Posted: {getPrettyDate(posted)}</p>}
            {content && <>{documentToReactComponents(content)}</>}
        </div>
    );
};

export default Post;
