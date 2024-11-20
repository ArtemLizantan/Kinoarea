import { useQuery } from "@tanstack/react-query";
import { useMovies } from "../../../context/Context";
import { IDataMovies } from "../../../interfaces/interfaces";
import moviesService from "../../../services/movies.service";
import PopularTop from "./components/popularTop/PopularTop";
import styles from "./popular.module.scss";
import PopularCardsSwiper from "./components/popularCardsSwiper/PopularCardsSwiper";

const Popular = () => {
  const { data, isLoading } = useQuery<IDataMovies[]>({
    queryKey: ["movies-popular"],
    queryFn: async () => {
      return new Promise((resolve) => {
        moviesService.getFilms(
          {
            dbFirebase: "movies",
            limitOfCards: 24,
            field: "vote_average",
            options: ">",
            value: "7.4",
          },
          resolve,
        );
      });
    },
  });

  const { tabsDataPopular } = useMovies();

  const filteredCards = data?.filter((movie) => {
    if (tabsDataPopular === "All") {
      return true;
    } else {
      return movie.year.includes(tabsDataPopular);
    }
  });

  console.log(filteredCards);

  const limitedCards = filteredCards?.slice(0, 8);
  return (
    <section className={styles.nowcinema}>
      <div className={styles.nowcinema__body}>
        <PopularTop />
        <PopularCardsSwiper
          isLoading={isLoading}
          filteredCards={limitedCards}
        />
      </div>
    </section>
  );
};

export default Popular;
