import { useQuery } from "@tanstack/react-query";
import Title from "../../../../components/title/Title";
import styles from "./movieSimilar.module.scss";
import { IDataMovies } from "../../../../interfaces/interfaces";
import FilmCard from "../../../../components/filmCard/FilmCard";
import { useParams } from "react-router";
import moviesService from "../../../../services/movies.service";
import { useEffect, useState } from "react";

const MovieSimilar = ({ genreFilm }: { genreFilm: string | undefined }) => {
  const { id } = useParams();
  const [numberFromId, setNumberFromId] = useState(
    Number(id?.match(/\d+/)?.[0])
  );

  useEffect(() => {
    setNumberFromId(Number(id?.match(/\d+/)?.[0]));
  }, [id]);

  const { data, isLoading } = useQuery<IDataMovies[]>({
    queryKey: ["additionalMovies"],
    queryFn: async () => {
      return new Promise((resolve) => {
        moviesService.getSimilarFilms({ genreFilm }, resolve);
      });
    },
  });

  const filteredData = data?.filter((movie) => movie.id !== numberFromId);

  return (
    <div className={styles.similar}>
      <div className={styles.similar__body}>
        <div className={styles.similar__top}>
          <Title text="Similar movies" />
        </div>
        <div className={styles.similar__bottom}>
          {filteredData?.map(
            ({ title, poster_path, genre, id, vote_average }) => (
              <FilmCard
                id={id}
                key={id}
                name={title}
                img={poster_path}
                genre={genre}
                rating={vote_average}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSimilar;
