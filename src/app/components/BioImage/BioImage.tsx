import React from "react";
import MyImage from "@/app/components/general/MyImage";
import styles from "./BioImage.module.css";
const BioImage = () => {
  return (
    <div className={styles.container}>
      <MyImage assetid={"5ErbQQzw8IRhgf5CZfqZsj"} width={250} height={250} />
    </div>
  );
};

export default BioImage;
