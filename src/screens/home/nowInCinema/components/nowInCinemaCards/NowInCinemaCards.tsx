import { useQuery } from "@tanstack/react-query";
import moviesService from "../../../../../services/movies.service";
import styles from "./nowInCinemaCards.module.scss";
import FilmCard from "../../../../../components/filmCard/FilmCard";

const NowInCinemaCards = () => {
  const { data } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await moviesService.getNewMovies();
      return response.data;
    },
  });

  console.log(data);

  return <div className={styles.cards}>
    {/* {data.Search.map({poster,title,})} */}
    </div>;
};

export default NowInCinemaCards;
