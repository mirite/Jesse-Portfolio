import React from "react";
import Image from "@/app/components/general/Image";
import styles from "./BioImage.module.css";
const BioImage = () => {
  return (
    <div className={styles.container}>
      {/* @ts-expect-error Server Component */}
      <Image
        assetid={"5ErbQQzw8IRhgf5CZfqZsj"}
        width={250}
        height={250}
      />
    </div>
  );
};

export default BioImage;
