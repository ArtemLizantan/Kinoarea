import React from "react";
import Title from "../../components/title/Title";
import RegisterForm from "./components/RegisterForm";
import styles from "./register.module.scss";

const Register: React.FC = () => {
  return (
    <section className={styles.register}>
      <div className={styles.register__body}>
        <div className={styles.register__wrapper}>
          <Title text="Register" />
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default Register;
