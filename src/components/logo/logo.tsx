import React from "react";
import styles from "./logo.module.css";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/'>
      <div className={styles.logo}></div>
    </Link>
  );
};

export default Logo;
