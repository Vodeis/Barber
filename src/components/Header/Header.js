import styles from "./Header.module.scss";
import classNames from "classnames";
import { text } from "../../text/text";
import logo from "../../img/logo.webp";

function Header() {
  const content = text.header;

  return (
    <>
      <div className={styles.header}>
        <input className={styles.checkbox} type="checkbox" />
        <div className={styles.hamburgerLines}>
          <span className={classNames(styles.line, styles.line1)}></span>
          <span className={classNames(styles.line, styles.line2)}></span>
          <span className={classNames(styles.line, styles.line3)}></span>
        </div>

        <div className={styles.header__logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.header__contacts}>
          <a href={`tel:${content.numHref}`}>{content.number}</a>
          <a href={content.adressLink} target="_blank" rel="noreferrer">
            {content.adress}
          </a>
        </div>
        <nav className={styles.header_nav}>
          <ul className={styles.header_list}>
            {content.menu.map((el, i) => (
              <li key={i} className={styles.header_list_item}>
                <a href={el.href}>{el.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
