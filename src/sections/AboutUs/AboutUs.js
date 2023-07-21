import style from "./AboutUs.module.scss";
import {text} from '../../text/text';

function AboutUs() {
  const about = text.aboutUs
  return (
    <section className={style.about} id="aboutUs">
      <div className={style.about__container}>
        <div className={style.about__top}>
          <h5>{about.title}</h5>
          <p>{about.content}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
