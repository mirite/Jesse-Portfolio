import React from "react";
import { Asset } from "contentful";
import Image from "next/image";

const GalleryImage = ({ asset }: { asset: Asset }) => {
  return (
    <div>
      <a href={asset.fields.file.url} target="_blank">
        <Image
          src={"https:" + asset.fields.file.url}
          alt={asset.fields.file.fileName}
          width={asset.fields.file.details.image?.width || 500}
          height={asset.fields.file.details.image?.height || 500}
        />
      </a>
    </div>
  );
};

export default GalleryImage;
