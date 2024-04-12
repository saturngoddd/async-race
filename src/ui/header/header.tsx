import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Async Race</h1>
      <nav className={styles.menu}>
        <p className={styles.garage}>Garage</p>
        <p className={styles.winners}>Winners</p>
      </nav>
    </header>
  );
}

export default Header;
