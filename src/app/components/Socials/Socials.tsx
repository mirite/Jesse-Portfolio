import React from 'react';
import {getEntries} from "@/app/helpers/connector";
import {Social as ISocial} from "@/app/components/Socials/types";
import Social from "@/app/components/Socials/Social";
import styles from "./Socials.module.css";

const Socials = async () => {
    const socials = await getEntries<ISocial>("social");
    return (
        <ul className={styles.socials}>
            {
                socials.map(({fields: social}) => {
                    return (
                        <Social key={social.platform} {...social} />
                    )
                })
            }
        </ul>
    );
};

export default Socials;
