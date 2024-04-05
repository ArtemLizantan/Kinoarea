import styles from "./nowincinema.module.scss";
import NowInCinemaTop from "./components/nowInCinemaTop/NowInCinemaTop";
import NowInCinemaCards from "./components/nowInCinemaCards/NowInCinemaCards";
import { useQuery } from "@tanstack/react-query";
import moviesService from "../../../services/movies.service";
import { IDataMovies } from "../../../interfaces/interfaces";
import { useMovies } from "../../../context/Context";

const NowInCinema = () => {
  const { data, isLoading } = useQuery<IDataMovies[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      return new Promise((resolve) => {
        moviesService.getNewMovies(resolve);
      });
    },
  });

  const { tabsData } = useMovies();

  const filteredCards = data?.filter((movie) => {
    if (tabsData === "All") {
      return true;
    } else {
      return movie.genre.includes(tabsData);
    }
  });

  const limitedCards = filteredCards?.slice(0, 8);

  return (
    <section className={styles.nowcinema}>
      <div className={styles.nowcinema__body}>
        <NowInCinemaTop />
        <NowInCinemaCards isLoading={isLoading} filteredCards={limitedCards} />
      </div>
    </section>
  );
};

export default NowInCinema;
