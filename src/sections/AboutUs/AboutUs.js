import style from "./AboutUs.module.scss";

function AboutUs() {
  return (
    <section className={style.about} id="aboutUs">
      <div className={style.about__container}>
        <div className={style.about__top}>
          <h5>Про нас: </h5>
          <ul>
            <li>
              Ми команда досвідчених професіоналів які готові вас навчити
              мистецтву барберінгу та покращити ваші навички якщо ви вже є
              майстер з досвідом.
            </li>
            <li>Ми надаємо обширну теоретичну базу знань </li>
            <li>Та багато годин практики.</li>
            <li>Ми постійно розвиваємось самі і готові ділити.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
