import React from 'react';
import Card from "@/app/components/Card";
import styles from './Posts.module.scss';
import {Post} from "@/types";
interface Props {
    posts: Post[]
}
const Posts = (props: Props) => {
    const {posts} = props;
    return (
        <div className={styles.posts}>
            {
                posts.map(post => (
                    <Card key={post.slug} title={post.title} link={post.category + "/" + post.slug}/>
                ))
            }
        </div>
    );
};

export default Posts;
