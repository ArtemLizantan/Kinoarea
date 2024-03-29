import { ICardMovieProps } from "../../interfaces/interfaces";
import styles from "./filmcard.module.scss";

const FilmCard = ({ img, name, genre }: ICardMovieProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <div className={styles.card__img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.card__desc}>
          <h3 className={styles.card__name}>{name}</h3>
          <h4 className={styles.card__genre}>{genre}</h4>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
