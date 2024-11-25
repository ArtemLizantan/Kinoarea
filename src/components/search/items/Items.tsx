import ProgressCircleRating from "../../progressCircleRating/ProgressCircleRating";
import styles from "./items.module.scss";

interface IItemsProps {
  img: string;
  title: string;
  genre: string[];
  route: string;
  voteAverage: string;
}

export default function Items({
  img,
  title,
  genre,
  route,
  voteAverage,
}: IItemsProps) {
  return (
    <a href={route} className={styles.item}>
      <div className={styles.item__body}>
        <div className={styles.item__wrapLeft}>
          <div className={styles.item__left}>
            <img src={img} alt={title} />
          </div>
          <div className={styles.item__right}>
            <h4 className={styles.item__title}>{title}</h4>
            <p className={styles.item__genre}>{genre.join(", ")}</p>
          </div>
        </div>
        <div className={styles.item__avg}>
          <ProgressCircleRating rating={voteAverage} />
        </div>
      </div>
    </a>
  );
}
