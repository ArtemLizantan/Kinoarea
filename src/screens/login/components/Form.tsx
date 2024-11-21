import React from "react";
import { Field, Form, Formik, useFormikContext } from "formik";
import Button from "../../../components/UI/button/Button";
import ErrorInput from "../../../components/UI/errorInput/ErrorInput";
import Links from "../../../components/UI/link/Link";
import { FormFooterComponentProps } from "../../../interfaces/interfaces";
import { ROUTES } from "../../../routes";
import { initialValues, schemas } from "./helper";
import styles from "./loginForm.module.scss";

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
          <Links
            background="var(--secondaryBlueColor)"
            path={ROUTES.REGISTER}
            text="Register"
          />
        </div>
      </div>
    </Form>
  );
};
