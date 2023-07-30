import React from "react";
import styles from "./Footer/Footer.module.css";
const Footer = () => {
  return (
    <footer className="mt-2 p-4 text-center">
      Copyright ©{new Date().getFullYear()} Jesse Conner
    </footer>
  );
};

export default Footer;
