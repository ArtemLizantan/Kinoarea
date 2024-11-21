import FilmCard from "../../../../../components/filmCard/FilmCard";
import { INowInCinemaCardsProps } from "../../../../../interfaces/interfaces";
import styles from "./nowInCinemaCards.module.scss";

const NowInCinemaCards = ({
  filteredCards,
  isLoading,
}: INowInCinemaCardsProps) => {
  return (
    <div className={styles.cards}>
      <div className={styles.cards__body}>
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          filteredCards &&
          filteredCards.map(({ title, posterPath, genre, id, voteAverage }) => (
            <FilmCard
              id={id}
              key={id}
              name={title}
              img={posterPath}
              genre={[genre]}
              rating={Number(voteAverage)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NowInCinemaCards;
