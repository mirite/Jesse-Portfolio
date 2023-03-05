import React from 'react';
import {Social} from "@/app/components/Socials/types";
import styles from './Social.module.css';
const Social = (social: Social) => {
    return (
        <li className={styles.social}>
            <span><strong>{social.platform}</strong>:</span>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.username}
            </a>
        </li>
    );
};

export default Social;
