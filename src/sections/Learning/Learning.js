import styles from './Learning.module.scss';

function Learning() {
  const content = [
    { img: "", text: "Моделі для відпрацювання та болванки надаємо на період навчання " },
    { img: "", text: "Навчання в атмосферній та сучасній аудиторії, з наявною фотозоною " },
    { img: "", text: "Використовуємо тільки якісну та професійну косметику" },
  ];
  return (
    <section className={styles.learning} id='learning'>
    <div className={styles.learning__container}>
      <h1 className={styles.learning__title}>Як проходить навчання?</h1>
      <p className={styles.learning__description}>
        Ми забезпечуємо вас усім необхідним, все що потрібно, мати при собі
        гарний настрій.
      </p>
      <ul className={styles.learning__itemsContainer}>
        {content.map((item) => (
          <li className={styles.learning__item}>
            <img className={styles.learning__item__img} src={item.img} alt="content-pht" />
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
