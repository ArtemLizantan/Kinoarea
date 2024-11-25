import Container from "../../components/container/Container";
import Title from "../../components/title/Title";
import LoginForm from "./components/Form";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <section className={styles.login}>
      <Container>
        <div className={styles.login__body}>
          <div className={styles.login__wrapper}>
            <Title text="Login" />
            <LoginForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;
