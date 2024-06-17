import { Formik, Form, Field, useFormikContext } from "formik";
import { initialValues, schemas } from "./helper";
import styles from "./registerForm.module.scss";
import { FormFooterComponentProps } from "../../../interfaces/interfaces";
import Button from "../../../components/UI/button/Button";
import ErrorInput from "../../../components/UI/errorInput/ErrorInput";
import { registerFormData } from "./registerFormData";
import { ROUTES } from "../../../routes";
import { Link } from "react-router-dom";

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
              <span>Соглашаюсь на условия политики конфиденциальности</span>
            </label>
            <ErrorInput name="checked" />
          </div>
          <div className={styles.form__inputWrapper}>
            <label className={styles.form__label}>
              <Field type="checkbox" name="checked1" value="One" />
              <span>
                Соглашаюсь на обработку
                <Link to={ROUTES.PRIVACY_POLICY}>персональных данных</Link>
              </span>
            </label>
            <ErrorInput name="checked1" />
          </div>
        </div>

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
