import React, { PropsWithChildren } from "react";

const PageWrapper = ({
  children,
  title,
}: PropsWithChildren & { title: string }) => {
  return (
    <main className="flex-1 w-full max-w-[1400px] min-h-[100vh]">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      {children}
    </main>
  );
};

export default PageWrapper;
