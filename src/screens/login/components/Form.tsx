import { Formik, Form, Field, useFormikContext } from "formik";
import { initialValues, schemas } from "./helper";
import styles from "./loginForm.module.scss";
import { FormFooterComponentProps } from "../../../interfaces/interfaces";
import Button from "../../../components/UI/button/Button";
import Links from "../../../components/UI/link/Link";
import ErrorInput from "../../../components/UI/errorInput/ErrorInput";
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
          <Button
            color="#151a26"
            text="Login"
            disabled={isSubmitting}
            type="submit"
            background="#F2F60F"
          />
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
