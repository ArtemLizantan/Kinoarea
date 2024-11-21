import Title from "../../components/title/Title";
import LoginForm from "./components/Form";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.login__body}>
        <div className={styles.login__wrapper}>
          <Title text="Login" />
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
