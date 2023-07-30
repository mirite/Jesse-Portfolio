import React from "react";
import { getEntries } from "@/app/helpers/connector";
import { Social as ISocial } from "@/app/components/Socials/types";
import Social from "@/app/components/Socials/Social";

const Socials = async () => {
  const socials = await getEntries<ISocial>("social");
  return (
    <ul className="flex flex-col p-0 max-w-fit">
      {socials.map(({ fields: social }) => {
        return <Social key={social.platform} {...social} />;
      })}
    </ul>
  );
};

export default Socials;
