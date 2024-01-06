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
    <div className="shadow rounded-lg bg-slate-300 dark:bg-slate-50 text-black p-2 aspect-square hover:bg-slate-400 transition hover:transition">
      <a
        className={
          "grid w-full h-full justify-center items-center text-center font-semibold no-underline"
        }
        href={link}
      >
        {image && <MyImage assetid={image} />}
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default Card;
