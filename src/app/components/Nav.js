import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Nav = () => {
  const linkItems = [
    { name: 'Home', targrt: '/' },
    { name: 'About', targrt: '/about' },
    { name: 'Movie', targrt: '/movies' },
    { name: 'Contact', targrt: '/contact' },
  ];
  return (
    <nav>
      <ul className={styles.navbarList}>
        {linkItems.map((item, i) => {
          return (
            <li className={styles.navbarItem} key={i}>
              <Link className={styles.navbarLink} href={item.targrt}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
