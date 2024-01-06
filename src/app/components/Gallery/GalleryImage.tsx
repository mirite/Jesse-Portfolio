import React from "react";
import { Asset } from "contentful";
import Image from "next/image";

const GalleryImage = ({ asset }: { asset: Asset }) => {
  const details = asset.fields?.file?.details;
  const meta = asset.fields.file;

  if (
    !details ||
    !meta ||
    !(typeof meta.url === "string") ||
    !(typeof meta.fileName === "string") ||
    !("image" in details)
  )
    return <></>;
  return (
    <div>
      <a href={meta.url} target="_blank">
        <Image
          src={"https:" + meta.url}
          alt={meta.fileName}
          width={details.image?.width || 500}
          height={details.image?.height || 500}
        />
      </a>
    </div>
  );
};

export default GalleryImage;
