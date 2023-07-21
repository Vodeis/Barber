// import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import styles from "./CallBackForm.module.scss";
import {text} from '../../text/text';

function CallBackForm() {
  const content = text.contactUs;

  const SendForm = async (data) => {
    const response = await fetch("sendmail.php", {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message)
    } else {
      alert('Error')
    }
  };

  return (
    <div className={styles.form__container}>
      <Formik
        initialValues={{ name: "", phone: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) errors.name = "Required";
          if (!values.phone) errors.phone = "Required";

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();
          formData.append("name", values.name);
          formData.append("phone", values.phone);
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            SendForm(formData);
            values.name = '';
            values.phone = '';
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.form__input}>
              <Field
                placeholder={content.name}
                type="name"
                name="name"
                required
              />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className={styles.form__input}>
              <Field
                placeholder={content.phone}
                type="text"
                name="phone"
                required
              />
              <ErrorMessage name="phone" component="span" />
            </div>

            <Button
              text={content.submit}
              type="submit"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CallBackForm;
