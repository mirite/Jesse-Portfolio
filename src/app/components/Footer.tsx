import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright ©{new Date().getFullYear()} Jesse Conner
    </footer>
  );
};

export default Footer;
