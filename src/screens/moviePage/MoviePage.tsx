import { IDataMovies } from "../../interfaces/interfaces";
import MainInfoCard from "./components/moviMainInfo/MovieMainInfo";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MovieLike from "./components/movieLike/MovieLike";
import styles from "./moviePage.module.scss";
import MovieTable from "./components/movieTable/MovieTable";

const InfoCard = () => {
  const { id } = useParams();
  const numberFromId = id && id.match(/\d+/)?.[0];

  const { data, isLoading } = useQuery<IDataMovies[]>({
    queryKey: ["movies"],
  });

  const movie = data?.find((item) => item.id === Number(numberFromId));
  console.log(movie);

  return data === undefined ? (
    <div>Nothing</div>
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
          />
          <MovieLike />
          <MovieTable movie={movie} />
        </div>
        <div className={styles.moviePage__center}></div>
        <div className={styles.moviePage__bottom}></div>
      </div>
    </section>
  );
};

export default InfoCard;
