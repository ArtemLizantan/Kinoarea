import FilmCard from "../../../../../components/filmCard/FilmCard";
import {
  INowInCinemaCards,
  INowInCinemaCardsProps,
} from "../../../../../interfaces/interfaces";
import styles from "./popularCards.module.scss";

const PopularCards = ({ filteredCards, isLoading }: INowInCinemaCardsProps) => {
  return (
    <div className={styles.cards}>
      <div className={styles.cards__body}>
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          filteredCards &&
          filteredCards.map(
            ({
              title,
              poster_path,
              genre,
              id,
              vote_average,
            }: INowInCinemaCards) => (
              <FilmCard
                id={id}
                key={id}
                name={title}
                img={poster_path}
                genre={genre}
                rating={vote_average}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default PopularCards;
