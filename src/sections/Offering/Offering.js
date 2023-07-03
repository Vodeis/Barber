import style from "./Offering.module.scss";
import {text} from '../../text/text'

function Offering() {
  const content = text.offering;

  return (
    <section className={style.offering} id="offering">
      <div className={style.offering__container}>
        <h5>{content.title}</h5>
        <ul className={style.offering__items}>
          {content.offers.map((offer, i) => (
            <li className={style.offering__offer} key={i}>
              <img src={require(`../../img/aboutUs/${offer.img}`)} alt="offers"></img>
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
