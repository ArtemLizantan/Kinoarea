import React from "react";
import { Field, Form, Formik, useFormikContext } from "formik";
import ErrorInput from "../../../components/UI/errorInput/ErrorInput";
import { FormFooterComponentProps } from "../../../interfaces/interfaces";
import { initialValues, schemas } from "./helper";
import styles from "./loginForm.module.scss";
import Button from "../../../components/UI/Button";
import { ROUTES } from "../../../routes";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemas.custom}
      onSubmit={async () => {
        try {
          /* empty */
        } catch (error) {}
      }}
    >
      {({ isSubmitting }) => <FormLoginComponent isSubmitting={isSubmitting} />}
    </Formik>
  );
};

export default LoginForm;

const FormLoginComponent = ({ isSubmitting }: FormFooterComponentProps) => {
  const formik = useFormikContext<FormValues>();

  return (
    <Form className={styles.form}>
      <div className={styles.form__body}>
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
        <div className={styles.form__inputWrapper}>
          <Field
            className={styles.form__input}
            type="password"
            name="password"
            placeholder="Enter your password"
            onBlur={formik.handleBlur}
          />
          <ErrorInput name="password" />
        </div>

        <div className={styles.form__buttons}>
          <Button type="submit" text="Login" background="#f2f60f" />
          <Button
            route={ROUTES.REGISTER}
            text="Create Account"
            background="#FFFFFF"
          />
        </div>
      </div>
    </Form>
  );
};
