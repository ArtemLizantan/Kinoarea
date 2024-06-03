import { ErrorMessage } from "formik";
import styles from "./error.module.scss";

interface ErrorInputProps {
  name: string;
}

const ErrorInput = ({ name }: ErrorInputProps) => {
  return <ErrorMessage name={name} component="div" className={styles.error} />;
};

export default ErrorInput;
