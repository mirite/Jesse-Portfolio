import React, { DetailedHTMLProps } from "react";

const Button = ({
  children,
  className,
  role,
  type,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const finalClass =
    "pill transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 " +
    className;
  const roleToUse = role || "button";
  const typeToUse = type || "button";
  return (
    <button
      className={finalClass.trim()}
      role={roleToUse}
      type={typeToUse}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
