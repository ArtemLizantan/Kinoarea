import React from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import { initialValues, schemas } from "./helper";
import styles from "./registerForm.module.scss";
import { FormFooterComponentProps } from "../../../interfaces/interfaces";
import ErrorInput from "../../../components/UI/errorInput/ErrorInput";
import { registerFormData } from "./registerFormData";
import { ROUTES } from "../../../routes";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button";

interface FormValues {
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
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

export default RegisterForm;

const FormLoginComponent = ({ isSubmitting }: FormFooterComponentProps) => {
  const formik = useFormikContext<FormValues>();

  console.log(formik);

  return (
    <Form className={styles.form}>
      <div className={styles.form__body}>
        {registerFormData.map(({ id, placeholder, type, name, error }) => (
          <div key={id} className={styles.form__inputWrapper}>
            <Field
              className={styles.form__input}
              type={type}
              name={name}
              placeholder={placeholder}
              onBlur={formik.handleBlur}
            />
            <ErrorInput name={error} />
          </div>
        ))}

        <div className={styles.form__checkboxs}>
          <div className={styles.form__inputWrapper}>
            <label className={styles.form__label}>
              <Field type="checkbox" name="checked" value="Two" />
              <span>I agree to the terms of the Privacy Policy</span>
            </label>
            <ErrorInput name="checked" />
          </div>
          <div className={styles.form__inputWrapper}>
            <label className={styles.form__label}>
              <Field type="checkbox" name="checked1" value="One" />
              <span>
                I agree to the processing &nbsp;
                <Link to={ROUTES.PRIVACY_POLICY}>personal data</Link>
              </span>
            </label>
            <ErrorInput name="checked1" />
          </div>
        </div>

        <div className={styles.form__buttons}>
          <Button type="submit" text="Register" background="#f2f60f" />
        </div>
      </div>
    </Form>
  );
};
