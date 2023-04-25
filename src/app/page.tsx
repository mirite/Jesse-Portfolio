import styles from './page.module.css'
import {getRichTextContent} from "@/app/helpers/connector";
import Socials from "@/app/components/Socials";
import BioImage from "@/app/components/BioImage";
import Posts from "@/app/components/Posts";
import {getPosts} from "@/app/helpers/posts";

export default async function Home() {
    const {props} = await data();
    const {title, posts} = props;
    return (
        <div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.hero}>
                <BioImage/>
                {/* @ts-expect-error Server Component */}
                <Socials/>
            </div>
            <div>
                <Posts posts={posts}/>
            </div>
        </div>
    )
}

const data = async () => {

    const title = await getRichTextContent("5elXtJ9BtgyNW3u0qrTzxy", "content");
    const posts = (await getPosts(10)) || [];
    return {
        props: {
            title,
            posts
        },
    }
}
