import React from 'react';
import styles from "@/app/page.module.css";
import BioImage from "@/app/components/BioImage";
import Socials from "@/app/components/Socials";
import {getRichTextContent} from "@/app/helpers/connector";
import contactPageStyles from "./page.module.css";
import ContactForm from "@/app/components/ContactForm";
const Page = async () => {
    const {title} = await data();
    return (
        <div className={"container"}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.hero}>
                <BioImage/>
                {/* @ts-expect-error Server Component */}
                <Socials/>
            </div>
            <ContactForm />
        </div>
    );
};

const data = async () => {

    const title = await getRichTextContent("6hDDlcnlG9gdoL8QClVPOw", "content");
    return {title};
}

export async function generateMetadata() {
    return {
        title: "Contact",
        description: ""
    }
}

export default Page;
