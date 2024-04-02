import styles from "./nowInCinemaCards.module.scss";
import FilmCard from "../../../../../components/filmCard/FilmCard";
import {
  INowInCinemaCards,
  INowInCinemaCardsProps,
} from "../../../../../interfaces/interfaces";

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
          filteredCards.map(
            ({ title, poster_path, genre, id }: INowInCinemaCards) => (
              <FilmCard key={id} name={title} img={poster_path} genre={genre} />
            )
          )
        )}
      </div>
    </div>
  );
};

export default NowInCinemaCards;
