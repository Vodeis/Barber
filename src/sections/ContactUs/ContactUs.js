import CallBackForm from "../../components/CallBackForm/CallBackForm";
import style from "./ContactUs.module.scss";
import {text} from '../../text/text';


function ContactUs() {
  const content = text.contactUs;
  return (
    <section className={style.contactUs__bg} id="contactUs">
      <div className={style.contactUs__container}>
      <p className={style.contactUs__title}>{content.title}</p>
        <p className={style.contactUs__description}>
        {content.text}
        </p>
        <CallBackForm />
      </div>
    </section>
  );
}

export default ContactUs;
