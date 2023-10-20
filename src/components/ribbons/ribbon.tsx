import React from "react";
import styles from "./ribbon.module.css";

const Ribbon = ({ ribbonStyle }: { ribbonStyle: string }) => {
  return <div className={`${styles[ribbonStyle]} ${styles["ribbon"]}`}></div>;
};

export default Ribbon;
