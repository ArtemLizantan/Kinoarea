import styles from "./nowincinema.module.scss";
import NowInCinemaTop from "./components/nowInCinemaTop/NowInCinemaTop";
import NowInCinemaCards from "./components/nowInCinemaCards/NowInCinemaCards";

const NowInCinema = () => {
  return (
    <section className={styles.nowcinema}>
      <div className={styles.nowcinema__body}>
        <NowInCinemaTop />
        <NowInCinemaCards />
      </div>
    </section>
  );
};

export default NowInCinema;
