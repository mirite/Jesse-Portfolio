import React from 'react';
import styles from './Card.module.scss';

interface Props {
    title: string;
    image?: string;
    link: string;
}
const Card = (props: Props) => {
    const { title, image, link } = props;
    return (
        <div className={styles.card}>
            <a href={link}>{image && <img src={image} alt={title}/>}<h2>{title}</h2></a>
        </div>
    );
};

export default Card;
