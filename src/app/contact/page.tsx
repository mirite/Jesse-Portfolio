import React from "react";
import BioImage from "@/app/components/BioImage";
import Socials from "@/app/components/Socials";
import { getRichTextContent } from "@/app/helpers/connector";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import PageWrapper from "@/app/components/general/PageWrapper";

const Page = async () => {
  const { title } = await data();
  return (
    <PageWrapper title={title}>
      <div className="container">
        <div className="flex w-max mx-auto flex-col md:flex-row justify-between items-center md:items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <BioImage />
          <Socials />
        </div>
        <ContactForm />
      </div>
    </PageWrapper>
  );
};

const data = async () => {
  const title = (await getRichTextContent(
    "6hDDlcnlG9gdoL8QClVPOw",
    "content",
  )) as string;
  return { title };
};

export async function generateMetadata() {
  return {
    title: "Contact",
    description: "",
  };
}

export default Page;
