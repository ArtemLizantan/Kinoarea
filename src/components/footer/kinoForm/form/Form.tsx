import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { useState } from "react";
import { initialValues, schemas } from "./helper";
import axios from "axios";

const FooterForm = () => {
  //   const formik = useFormikContext();
  //   const isEmailValid =
  //     formik.values.email.length > 4 && formik.values.email.includes("@");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemas.custom}
      onSubmit={async (values, actions) => {
        try {
          const response = await axios.post(
            "https://auth-qa.qencode.com/v1/auth/login",
            values,
            { headers: { "Content-Type": "application/json" } }
          );
          console.log("Успешный ответ:", response.data);

          actions.setSubmitting(false);
        } catch (error) {
          setError(true);
          console.error("Ошибка входа:", error);
          notifyError();
          actions.setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <FormFooterComponent
        //   setErrorInput={setError}
        //   errorInput={error}
        //   isSubmitting={isSubmitting}
        />
      )}
    </Formik>
  );
};

export default FooterForm;

const FormFooterComponent = ({ setErrorInput, errorInput, isSubmitting }) => {
  return (
    <Form>
      <Field
        className={`footer__input`}
        type={"email"}
        name="footerEmail"
        placeholder="Enter your email"
      />
      <ErrorMessage
        name="footerEmail"
        component="div"
        className="error-message"
      />
    </Form>
  );
};
