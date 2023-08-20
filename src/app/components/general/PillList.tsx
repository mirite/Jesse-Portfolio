import React from "react";

const PillList = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul
      className={
        "flex flex-wrap p-1 gap-x-3 gap-y-1 justify-center " + className
      }
      {...rest}
    >
      {children}
    </ul>
  );
};

export default PillList;
