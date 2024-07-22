import NewTrailers from "./newTrailers/NewTrailers";
import NowInCinema from "./nowInCinema/NowInCinema";
import styles from "./home.module.scss";
import Popular from "./popular/Popular";
import { Hero } from "./hero/Hero";
import Container from "../../components/container/Container";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__body}>
        <Container>
          <Hero />
          <NowInCinema />
          <NewTrailers />
          <Popular />
        </Container>
      </div>
    </div>
  );
};

export default Home;
