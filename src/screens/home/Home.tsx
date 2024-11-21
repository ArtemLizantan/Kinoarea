import NewTrailers from "./newTrailers/NewTrailers";
import NowInCinema from "./nowInCinema/NowInCinema";
import Popular from "./popular/Popular";
import { Hero } from "./hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <NowInCinema />
      <NewTrailers />
      <Popular />
    </>
  );
};

export default Home;
