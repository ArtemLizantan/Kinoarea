import styles from "./cabinet.module.scss";
import Sidebar from "./components/sidebar/Sidebar";

const Cabinet = () => {
  return (
    <section className={styles.cabinet}>
      <div className={styles.cabinet__body}>
        <div className={styles.cabinet__left}>
          <Sidebar />
        </div>
        <div className={styles.cabinet__right}>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Cabinet;
