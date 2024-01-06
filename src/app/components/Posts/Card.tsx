import React from "react";
import { MyImage } from "@/app/components";

interface Props {
  title: string;
  image?: string;
  link: string;
}
const Card = (props: Props) => {
  const { title, image, link } = props;
  return (
    <div className="shadow rounded-lg bg-slate-50 text-black m-2 p-2 opacity-50 flex justify-center items-center text-center font-semibold aspect-square">
      <a href={link}>
        {image && <MyImage assetid={image} />}
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default Card;
