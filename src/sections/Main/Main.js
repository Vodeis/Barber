import style from "./Main.module.scss";
// import cn from "classnames";

function Main() {
  return (
    <section className={style.main_section}>
      <div className={style.main_section__img__container}>
        {/* <img className={style.main_section__img}></img> */}
      </div>
      <div className={style.main_section__title__bg}>
      <div className={style.main_section__title__container}>
        <h1 className={style.main_section__title}>
          Хочеш працювати в барбершопі, але не вмієш стригти? Ми тебе навчимо.
        </h1>
        </div>
      </div>
    </section>
  );
}

export default Main;
