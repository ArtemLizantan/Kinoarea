import { Formik, Form, Field, useFormikContext } from "formik";
import { initialValues, schemas } from "./helper";
import styles from "./registerForm.module.scss";
import { FormFooterComponentProps } from "../../../interfaces/interfaces";
import Button from "../../../components/UI/button/Button";
import ErrorInput from "../../../components/UI/errorInput/ErrorInput";
import { registerFormData } from "./registerFormData";

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

        <div className={styles.form__buttons}>
          <Button
            color="#151a26"
            text="Register"
            disabled={isSubmitting}
            type="submit"
            background="#F2F60F"
          />
        </div>
      </div>
    </Form>
  );
};
