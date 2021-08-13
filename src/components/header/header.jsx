import React from "react";
import styles from "./header.module.css";

// css 작업시에는 onLogout을 true로 바꿔주지
const Header = ({ onLogout }) => (
  <header className={styles.header}>
      
    {onLogout && (
      <button className={styles.Logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <img className={styles.logo} src="/images/logo.png" alt="logo" />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default Header;
