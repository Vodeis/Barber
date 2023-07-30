import style from "./Main.module.scss";
import { text } from "../../text/text";

function Main() {
  const content = text.main;
  return (
    <section className={style.main_section} id="main">
      <div className={style.main_section__img__container}>
        <img
          className={style.main_section__img}
          src={require("../../img/main.webp")}
          alt="main"
        />
      </div>
      <div className={style.main_section__title__bg}>
        <div className={style.main_section__title__container}>
          <h1 className={style.main_section__title}>{content.title}</h1>
        </div>
      </div>
    </section>
  );
}

export default Main;
