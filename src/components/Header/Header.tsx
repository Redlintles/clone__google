import { GiErlenmeyer } from "react-icons/gi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Profile from "../Profile/Profile";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <nav className={styles["header__nav"]}>
        <a href="#" className={styles["header__link"]}>
          Gmail
        </a>
        <a href="#" className={styles["header__link"]}>
          Images
        </a>
        <a href="#" className={styles["header__link"]}>
          <GiErlenmeyer />
        </a>
        <a href="#" className={styles["header__link"]}>
          <BsFillGrid3X3GapFill />
        </a>
        <a href="#" className={styles["header__link"]}>
          <Profile name="João Paulo" backgroundColor="#ffbbbb" />
        </a>
      </nav>
    </header>
  );
}
