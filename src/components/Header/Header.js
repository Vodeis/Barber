import styles from "./Header.module.scss";
import classNames from "classnames";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <input
          // checked={burgerShow}
          // onChange={() => setBurgerShow(!burgerShow)}
          className={styles.checkbox}
          type="checkbox"
        />
        <div className={styles.hamburgerLines}>
          <span className={classNames(styles.line, styles.line1)}></span>
          <span className={classNames(styles.line, styles.line2)}></span>
          <span className={classNames(styles.line, styles.line3)}></span>
        </div>

        <div className={styles.header__logo}>Logo</div>
        <nav className={styles.header_nav}>
          <ul className={styles.header_list}>
            <li className={styles.header_list_item}>
              <a href="#aboutUs">Про нас</a>
            </li>
            <li className={styles.header_list_item}>
              <a href="#offering">Що ми пропонуємо</a>
            </li>
            <li className={styles.header_list_item}>
              <a href="#learning">Як проходить навчання</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
