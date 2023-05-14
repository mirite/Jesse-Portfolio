import React from "react";
import { Asset } from "contentful";
import GalleryImage from "@/app/components/GalleryImage";
import styles from "./Gallery.module.css";
const Gallery = ({ assets }: { assets: Asset[] }) => {
  return (
    <div className={styles.gallery}>
      {assets.map((asset) => (
        <GalleryImage key={asset.sys.id} asset={asset} />
      ))}
    </div>
  );
};

export default Gallery;
