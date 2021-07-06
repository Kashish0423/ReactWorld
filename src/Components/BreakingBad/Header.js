import React from "react";
import styles from "./BreakingBad.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt='Nothing' />
    </header>
  );
};

export default Header;
