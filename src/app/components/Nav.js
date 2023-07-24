'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { CgCloseR, CgMenu } from 'react-icons/cg';
import styles from '../styles/navbar.module.css';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const linkItems = [
    { name: 'Home', target: '/' },
    { name: 'About', target: '/about' },
    { name: 'Movie', target: '/movies' },
    { name: 'Contact', target: '/contact' }
  ];
  return (
    <nav className={styles.navbar}>
      <div className={openMenu ? `${styles.active}` : ''}>
        <ul className={styles.navbarList}>
          {linkItems.map((item, i) => {
            return (
              <li className={styles.navbarItem} key={i}>
                <Link className={styles.navbarLink} href={item.target} onClick={() => setOpenMenu(false)}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles['mobile-navbar-btn']}>
          <CgMenu name="menu-outline" className={styles['mobile-nav-icon']} onClick={() => setOpenMenu(true)} />
          <CgCloseR name="close-outline" className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`} onClick={() => setOpenMenu(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
