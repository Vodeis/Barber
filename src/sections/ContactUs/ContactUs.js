import CallBackForm from "../../components/CallBackForm/CallBackForm";
import style from "./ContactUs.module.scss";

function ContactUs() {
  return (
    <section className={style.contactUs__bg}>
      <div className={style.contactUs__container}>
      <p className={style.contactUs__title}>Lorem Ipsum has been</p>
        <p className={style.contactUs__description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <CallBackForm />
      </div>
    </section>
  );
}

export default ContactUs;
