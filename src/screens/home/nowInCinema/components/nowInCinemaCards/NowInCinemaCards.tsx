import { useQuery } from "@tanstack/react-query";
import moviesService from "../../../../../services/movies.service";
import styles from "./nowInCinemaCards.module.scss";
import FilmCard from "../../../../../components/filmCard/FilmCard";

const NowInCinemaCards = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["nowInCinemaData"],
    queryFn: async () => {
      return new Promise((resolve, reject) => {
        moviesService.getNewMovies(resolve);
      });
    },
  });

  console.log(data);
  

  return (
    <div className={styles.cards}>
      <div className={styles.cards__body}>
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          data.map(({ title, poster_path, genre, id }) => (
            <FilmCard key={id} name={title} img={poster_path} genre={genre} />
          ))
        )}
      </div>
    </div>
  );
};

export default NowInCinemaCards;
