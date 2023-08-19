import React from "react";

const TextWrapper = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={"prose dark:prose-invert mx-auto " + className} {...props}>
      {children}
    </div>
  );
};

export default TextWrapper;
