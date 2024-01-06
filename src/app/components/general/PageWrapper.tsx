import React from "react";
import { twMerge } from "tailwind-merge";

const PageWrapper = ({
  children,
  title,
  className: extendedClassName,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { title: string }) => {
  const className = twMerge("grow w-full", extendedClassName);
  return (
    <main className={className} {...rest}>
      <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
      {children}
    </main>
  );
};

export default PageWrapper;
