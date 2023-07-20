import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">Movie App</Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
