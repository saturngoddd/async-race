import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Async Race</h1>
        <nav className={styles.menu}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : styles.garage;
            }}
            to="/"
          >
            Garage
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : styles.winners;
            }}
            to="/winners"
          >
            Winners
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
