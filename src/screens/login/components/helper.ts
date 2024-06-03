import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

const regx = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
};

export const schemas = {
  custom: Yup.object().shape({
    email: Yup.string()
      .matches(regx.email, "Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  }),
};
