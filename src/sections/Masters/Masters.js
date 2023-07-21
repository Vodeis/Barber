import style from "./Masters.module.scss";
import { text } from "../../text/text";

function Masters() {
  const content = text.masters;
  return (
    <section className={style.masters} id="masters">
      <div className={style.masters__container}>
        <h1 className={style.masters__title}>{content.title}</h1>
        <ul className={style.masters__list}>
          {content.masters.map((el, i) => (
            <li className={style.masters__list__item} key={i}>
              <img
                className={style.masters__list__item__img}
                src={require(`../../img/masters/${el.img}`)}
                alt={`master${i}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Masters;
