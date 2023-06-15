import React from "react";
import { getAsset } from "@/app/helpers/connector";
import styles from "./Image.module.css";
import NextImage, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, "src" | "alt"> {
  assetid: string;
}

const Image = async (props: Props) => {
  const image = await getAsset(props.assetid);

  if (!image) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <NextImage
        src={"https:" + image.file.url}
        title={image.title}
        alt={image.description}
        {...props}
      />
    </div>
  );
};

export default Image;
