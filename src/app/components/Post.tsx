import React from 'react';
import {Post as PostType} from "@/types";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import styles from './Post.module.css';
interface Props extends PostType {}
const Post = (post: Props) => {
    const {title, content, posted} = post;
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            {documentToReactComponents(content)}
        </div>
    );
};

export default Post;
