import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <h3 className={styles.footerText}>&copy; 2024 All Rights Reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
