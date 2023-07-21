import styles from "./Header.module.scss";
import classNames from "classnames";
import { text } from "../../text/text";
import { useState } from "react";

function Header() {
  const content = text.header;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const closeMenu = () => {
    setChecked(false);
  };

  return (
    <>
      <div className={styles.header}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <div className={styles.hamburgerLines} onClick={handleChange}>
          <span className={classNames(styles.line, styles.line1)}></span>
          <span className={classNames(styles.line, styles.line2)}></span>
          <span className={classNames(styles.line, styles.line3)}></span>
        </div>

        <a href="#main" className={styles.header__logo}>
          {/* <p className={styles.header__logo__top}>{content.logo[0]}</p>
        <p className={styles.header__logo__bottom}>{content.logo[1]}</p> */}
          <img src={require("../../img/logo.PNG")} alt="logo" />
        </a>

        <div className={styles.header__contacts}>
          <a href={`tel:${content.numHref}`}>{content.number}</a>
          <a href={content.adressLink} target="_blank" rel="noreferrer">
            {content.adress}
          </a>
        </div>
        <nav className={styles.header_nav}>
          <ul className={styles.header_list}>
            {content.menu.map((el, i) => (
              <li
                key={i}
                className={styles.header_list_item}
                onClick={closeMenu}
              >
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
