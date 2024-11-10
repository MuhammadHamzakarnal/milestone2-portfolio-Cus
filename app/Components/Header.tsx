import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav className={styles.navContainer}>
        <div className={styles.navItem}>
          <h1>
            <span style={{ color: "#34d399" }}>Port</span>folio
          </h1>
        </div>

        <div className={styles.navLinksContainer}>
          <li className={styles.navLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/About">About Us</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/Project">Projects</Link>
          </li>
        </div>

        <div className={styles.contactButton}>
          <button>
            <Link href="/Contact">Contact Us</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
