import FilmCard from "../../../../../components/filmCard/FilmCard";
import { INowInCinemaCardsProps } from "../../../../../interfaces/interfaces";
import styles from "./popularCard.module.scss";

const PopularCardsSwiper = ({
  filteredCards,
  isLoading,
}: INowInCinemaCardsProps) => {
  return (
    <section>
      <div className={styles.cards}>
        <div className={styles.cards__body}>
          {isLoading ? (
            <div>Loading....</div>
          ) : (
            filteredCards &&
            filteredCards.map(
              ({ title, posterPath, genre, id, voteAverage }) => (
                <FilmCard
                  key={id}
                  id={id}
                  name={title}
                  img={posterPath}
                  genre={genre}
                  rating={voteAverage}
                />
              ),
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularCardsSwiper;
