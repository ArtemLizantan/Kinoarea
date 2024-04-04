import React from "react";
import styles from "./movieTable.module.scss";
import { IMovieTableProps } from "../../../../interfaces/interfaces";

const MovieTable = ({ movie }: IMovieTableProps) => {
  const arrayFromMoviesObject = [];
  arrayFromMoviesObject.push(movie);

  return (
    arrayFromMoviesObject.length !== 0 && (
      <div className={styles.movieTable}>
        <div className={styles.movieTable__body}>
          <div className={styles.movieTable__columns}>
            <ul className={styles.movieTable__column}>
              {arrayFromMoviesObject.map(
                ({
                  year,
                  country,
                  slogan,
                  directors,
                  producer,
                  cinematographer,
                  composer,
                  id,
                }) => (
                  <React.Fragment key={`column_${id}`}>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Country:
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {country}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>Year:</div>
                      <div className={styles.movieTable__columnRight}>
                        {year}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Slogan:
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        "{slogan}"
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Directors:
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {directors}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Producer:
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {producer}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Cinematographer:
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {cinematographer}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Composer:
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {composer}
                      </div>
                    </li>
                  </React.Fragment>
                )
              )}
            </ul>
            <ul className={styles.movieTable__column}>
              {arrayFromMoviesObject.map(
                ({
                  artist,
                  premiere_date,
                  worldwide_revenue,
                  age_rating,
                  release_date,
                  vote_average,
                  id,
                  duration,
                }) => (
                  <React.Fragment key={`column_${id}`}>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Artist:
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {artist}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Premiere date
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {premiere_date}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Worldwide revenue
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {worldwide_revenue}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Age rating
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {age_rating}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Release date:
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {release_date}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Vote average:
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {vote_average}
                      </div>
                    </li>
                    <li className={styles.movieTable__columnItem}>
                      <div className={styles.movieTable__columnLeft}>
                        Duration:
                      </div>
                      <div className={styles.movieTable__columnRight}>
                        {duration}
                      </div>
                    </li>
                  </React.Fragment>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieTable;
