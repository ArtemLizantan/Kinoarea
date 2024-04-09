import NewTrailers from "./newTrailers/NewTrailers";
import NowInCinema from "./nowInCinema/NowInCinema";
import styles from "./home.module.scss";
import Popular from "./popular/Popular";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__body}>
        <NowInCinema />
        <NewTrailers />
        <Popular />
      </div>
    </div>
  );
};

export default Home;
