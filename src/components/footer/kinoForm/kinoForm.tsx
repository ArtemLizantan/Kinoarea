import Logo from "../../logo/Logo";
import styles from "./newsLetter.module.scss";
import background from "../../../img/footer/background.jpg";
import FooterForm from "./form/Form";

const KinoForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form__body}>
        <img className={styles.form__bg} src={background} alt="background" />
        <div className={styles.form__top}>
          <Logo />
        </div>
        <div className={styles.form__center}>
          <div className={styles.center}>
            <h2 className={styles.center__title}>
              Subscribe to E-mail newsletter
            </h2>
            <p className={styles.center__subtitle}>
              If you want to keep abreast of the latest news and new films -
              fill out the form below and sign up for a free E-mail newsletter!
            </p>
          </div>
        </div>
        <div className={styles.form__bottom}>
          <FooterForm />
        </div>
      </div>
    </div>
  );
};

export default KinoForm;
