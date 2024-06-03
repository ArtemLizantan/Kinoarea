import * as Yup from "yup";

export const initialValues = {
  name: "",
  surname: "",
  login: "",
  newpassword: "",
  repeatpassword: "",
};

const regx = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  repeatpassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
};

export const schemas = {
  custom: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    login: Yup.string().required("Login is required"),
    newpassword: Yup.string()
      .matches(
        regx.password,
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long"
      )
      .required("Password is required"),
    repeatpassword: Yup.string()
      .oneOf([Yup.ref("newpassword")], "Passwords must match")
      .required("Repeat password is required"),
  }),
};
