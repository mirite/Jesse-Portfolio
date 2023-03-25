import React from 'react';
import {WP_REST_API_Post} from "wp-types";
import Card from "@/app/components/Card";
import styles from './Posts.module.scss';
interface Props {
    posts: WP_REST_API_Post[]
}
const Posts = (props: Props) => {
    const {posts} = props;
    return (
        <div className={styles.posts}>
            {
                posts.map(post => (
                    <Card key={post.id} title={post.title.rendered || ''} link={"https://jesseconner.ca"}/>
                ))
            }
        </div>
    );
};

export default Posts;
