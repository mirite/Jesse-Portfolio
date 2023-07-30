import React from "react";
import BioImage from "@/app/components/BioImage/BioImage";
import Socials from "@/app/components/Socials";
import { getRichTextContent } from "@/app/helpers/connector";
import ContactForm from "@/app/components/ContactForm/ContactForm";

const Page = async () => {
  const { title } = await data();
  return (
    <div className="container">
      <div>{title}</div>
      <div className="flex w-full flex-col md:flex-row justify-between items-center md:items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <BioImage />
        <Socials />
      </div>
      <ContactForm />
    </div>
  );
};

const data = async () => {
  const title = await getRichTextContent("6hDDlcnlG9gdoL8QClVPOw", "content");
  return { title };
};

export async function generateMetadata() {
  return {
    title: "Contact",
    description: "",
  };
}

export default Page;
