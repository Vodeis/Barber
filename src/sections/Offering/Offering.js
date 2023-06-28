import style from "./Offering.module.scss";
import img1 from "../../img/aboutUs/1.jpg";
import img2 from "../../img/aboutUs/2.jpg";
import img3 from "../../img/aboutUs/3.jpg";
import img4 from "../../img/aboutUs/4.jpg";

function Offering() {
  const offers = [
    {
      img: img1,
      title: "Навчання з нуля",
      text: "Якщо у вас взагалі немає досвіду але хочеться стригти, цей курс для вас. Обширний теоретичний блок, 100+ годин практики з моделями, навчимо як стригти так і обслуговувати за високими сервісними стандартами.",
    },
    {
      img: img2,
      title: "Підвищення кваліфікації",
      text: "Індивідуальний день заняття з викладачем який включає як теорію так і практичне відпрацювання. (Теоретичний блок, 2 демонстрації, 2 відпрацювання)",
    },
    {
      img: img3,
      title: "Майстер-класи",
      text: "На базі нашої академії кожен місяць будуть проходити навчальні семінари на різні теми які дотичні до барбер індустрії. Ви зможете купити квиток, та бути учасником подій які ми організовуємо.",
    },
    {
      img: img4,
      title: "Онлайн-курс",
      text: "У вас є можливість вчитись та підвищувати якість послуг віддалено завдяки відео-урокам та матеріалам які можна буде придбати у нас на сайті.",
    },
  ];

  return (
    <section className={style.offering} id="offering">
      <div className={style.offering__container}>
        <h5>Що ми пропонуємо:</h5>
        <ul className={style.offering__items}>
          {offers.map((offer, i) => (
            <li className={style.offering__offer} key={i}>
              <img src={offer.img} alt="offers"></img>
              <div className={style.offering__text__container}>
                <p className={style.offering__title}>{offer.title}</p>
                <p className={style.offering__text}>{offer.text}</p>
              </div>
              <div className={style.offering__dark_bg}></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Offering;
