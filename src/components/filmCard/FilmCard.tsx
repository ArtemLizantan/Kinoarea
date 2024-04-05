import { ICardMovieProps } from "../../interfaces/interfaces";
import { ROUTES } from "../../routes";
import LinkHoweredCard from "../UI/linkHoveredCard/LinkHoweredCard";
import styles from "./filmcard.module.scss";

const FilmCard = ({ img, name, genre, id, rating }: ICardMovieProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        {rating && <div className={styles.card__rating}>{rating}</div>}
        <div className={styles.card__img}>
          <div className={styles.card__hovered}>
            <LinkHoweredCard
              path={`${ROUTES.MOVIE}/:id${id}`}
              text={"Page of movie"}
            />
          </div>
          <img src={img} alt="movieImg" />
        </div>
        <div className={styles.card__desc}>
          <h3 className={styles.card__name}>{name}</h3>
          <h4 className={styles.card__genre}>{genre.join(", ")}</h4>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
