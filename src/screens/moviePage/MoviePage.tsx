import { IDataMovies } from "../../interfaces/interfaces";
import MainInfoCard from "./components/moviMainInfo/MovieMainInfo";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MovieLike from "./components/movieLike/MovieLike";
import styles from "./moviePage.module.scss";
import MovieTable from "./components/movieTable/MovieTable";
import MovieMainRoles from "./components/movieMainRoles/MovieMainRoles";
import MoviePhotos from "./components/moviePhotos/MoviePhotos";
import MovieSimilar from "./components/movieSimilar/MovieSimilar";

const InfoCard = () => {
  const { id } = useParams();
  const numberFromId = id && id.match(/\d+/)?.[0];

  const { data, isLoading } = useQuery<IDataMovies[]>({
    queryKey: ["movies"],
  });

  const movie = data?.find((item) => item.id === Number(numberFromId));

  return data === undefined ? (
    <div>Nothing</div>
  ) : isLoading ? (
    <div>Loading...</div>
  ) : (
    <section className={styles.moviePage}>
      <div className={styles.moviePage__body}>
        <div className={styles.moviePage__top}>
          <MainInfoCard
            id={movie?.id}
            poster={movie?.poster_path}
            desc={movie?.overview}
            rating={movie?.vote_average}
            title={movie?.title}
            slogan={movie?.slogan}
            backGroundPoster={movie?.backGroundPoster}
            trailer={movie?.trailer}
          />
          <MovieLike />
          <MovieTable movie={movie} />
        </div>
        <div className={styles.moviePage__actors}>
          <MovieMainRoles nameFilm={movie?.title} />
        </div>
        <div className={styles.moviePage__photos}>
          <MoviePhotos array={movie?.frames} />
        </div>
        <div className={styles.moviePage__similar}>
          <MovieSimilar genreFilm={movie?.genre.join()} />
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
