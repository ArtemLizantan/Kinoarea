import React from "react";
import Title from "../../components/title/Title";
import RegisterForm from "./components/RegisterForm";
import styles from "./register.module.scss";
import Container from "../../components/container/Container";

const Register: React.FC = () => {
  return (
    <section className={styles.register}>
      <Container>
        <div className={styles.register__body}>
          <div className={styles.register__wrapper}>
            <Title text="Register" />
            <RegisterForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Register;
