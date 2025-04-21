import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__top"]}>
        <p>Brazil</p>
      </div>
      <div className={styles["footer-bottom"]}>
        <ul className={styles["footer-bottom__links"]}>
          <a href="#" className={styles["footer-bottom__link"]}>
            About
          </a>
          <a href="#" className={styles["footer-bottom__link"]}>
            Adversiting
          </a>
          <a href="#" className={styles["footer-bottom__link"]}>
            Business
          </a>
          <a href="#" className={styles["footer-bottom__link"]}>
            How Search Works
          </a>
        </ul>
        <ul className={styles["footer-bottom__links"]}>
          <a href="#" className={styles["footer-bottom__link"]}>
            Privacy
          </a>
          <a href="#" className={styles["footer-bottom__link"]}>
            Terms
          </a>
          <a href="#" className={styles["footer-bottom__link"]}>
            Settings
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
