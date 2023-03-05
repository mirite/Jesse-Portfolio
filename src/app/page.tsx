import styles from './page.module.css'
import {getRichTextContent} from "@/app/connector";
import Socials from "@/app/components/Socials/Socials";
import Image from "@/app/components/general/Image";
import BioImage from "@/app/components/BioImage";

export default async function Home() {
    const {props} = await data()
    return (
        <div>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.hero}>
                <BioImage/>
                {/* @ts-expect-error Server Component */}
                <Socials/>
            </div>
        </div>
    )
}

const data = async () => {

    const title = await getRichTextContent("5elXtJ9BtgyNW3u0qrTzxy", "content");
    return {
        props: {
            title
        },
    }
}
