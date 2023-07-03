import styles from "./Learning.module.scss";
import { text } from "../../text/text";
function Learning() {
  const content = text.learning;
  return (
    <section className={styles.learning} id="learning">
      <div className={styles.learning__container}>
        <h1 className={styles.learning__title}>{content.title}</h1>
        <ul className={styles.learning__itemsContainer}>
          {content.items.map((item) => (
            <li className={styles.learning__item}>
              <img
                className={styles.learning__item__img}
                src={require(`../../img/learning/${item.img}`)}
                alt="content-pht"
              />
              <div className={styles.learning__item__textContainer}>
                <p className={styles.learning__item__text}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Learning;
