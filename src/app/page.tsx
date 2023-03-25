import styles from './page.module.css'
import {getRichTextContent} from "@/app/connector";
import Socials from "@/app/components/Socials/Socials";
import BioImage from "@/app/components/BioImage";
import Card from "@/app/components/Card";
import {getCategories, getPosts} from "@/app/wordpress";
import Posts from "@/app/components/Posts";

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
    const categories = (await getCategories()) || [];
    console.log(categories);
    return {
        props: {
            title,
            posts
        },
    }
}
