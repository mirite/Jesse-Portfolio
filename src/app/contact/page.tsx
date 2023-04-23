import React from 'react';
import styles from "@/app/page.module.css";
import BioImage from "@/app/components/BioImage";
import Socials from "@/app/components/Socials";
import {getRichTextContent} from "@/app/helpers/connector";

const Page = async () => {
    const {title} = await data();
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
        </div>
    );
};

const data = async () => {

    const title = await getRichTextContent("6hDDlcnlG9gdoL8QClVPOw", "content");
    return {title};
}


export default Page;
