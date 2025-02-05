import { Hero } from "./hero/Hero";
import NewTrailers from "./newTrailers/NewTrailers";
import NowInCinema from "./nowInCinema/NowInCinema";
import Popular from "./popular/Popular";

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
