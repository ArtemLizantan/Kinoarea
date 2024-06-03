import { Formik, Form, Field, useFormikContext } from "formik";
import { useState } from "react";
import axios from "axios";
import Button from "../../../UI/button/Button";
import { initialValues, schemas } from "./helper";
import styles from "../newsLetter.module.scss";
import { FormFooterComponentProps } from "../../../../interfaces/interfaces";
import ErrorInput from "../../../UI/errorInput/ErrorInput";

interface FormValues {
  email: string;
}

const FooterForm: React.FC = () => {
  const [error, setError] = useState<boolean>(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemas.custom}
      onSubmit={async (values: FormValues, actions) => {
        try {
          const response = await axios.post("", values, {
            headers: { "Content-Type": "application/json" },
          });
          console.log("Успешный ответ:", response.data);

          actions.setSubmitting(false);
        } catch (error) {
          setError(true);
          console.error("Ошибка входа:", error);
          // Assuming notifyError is defined somewhere in your codebase
          // notifyError();
          actions.setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <FormFooterComponent isSubmitting={isSubmitting} />
      )}
    </Formik>
  );
};

export default FooterForm;

const FormFooterComponent: React.FC<FormFooterComponentProps> = ({
  isSubmitting,
}) => {
  const formik = useFormikContext<FormValues>();

  return (
    <Form className={styles.form__wrapper}>
      <div className={styles.form__inputWrapper}>
        <Field
          className={styles.form__input}
          type="email"
          name="email"
          placeholder="Enter your email"
          onBlur={formik.handleBlur}
        />
        <ErrorInput name="email" />
      </div>
      <Button
        color="#151a26"
        text="Subscribe"
        disabled={isSubmitting}
        type="submit"
        background="#F2F60F"
      />
    </Form>
  );
};
