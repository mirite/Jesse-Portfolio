import React from "react";
import styles from "./Card.module.scss";
import MyImage from "@/app/components/general/MyImage";

interface Props {
  title: string;
  image?: string;
  link: string;
}
const Card = (props: Props) => {
  const { title, image, link } = props;
  return (
    <div className={styles.card}>
      <a href={link}>
        {image && <MyImage assetid={image} />}
        <h2>{title}</h2>
      </a>
    </div>
  );
};

export default Card;
