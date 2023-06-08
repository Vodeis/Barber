import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import styles from "./CallBackForm.module.scss";

function CallBackForm() {
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
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.form__inputsContainer}>
              <Field
                placeholder="Введіть ваше ім'я"
                type="name"
                name="name"
                required
              />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className={styles.form__inputsContainer}>
              <Field
                placeholder="Введіть ваш телефон"
                type="text"
                name="phone"
                required
              />
              <ErrorMessage name="phone" component="span" />
            </div>

            <Button
              text="Записатися на урок"
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
