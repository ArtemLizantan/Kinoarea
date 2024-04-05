import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/title/Title";
import NewTrailersSwiper from "./components/newTrailersSwiper/NewTrailersSwiper";
import styles from "./newTrailers.module.scss";
import { IDataMovies } from "../../../interfaces/interfaces";
import { useEffect, useState } from "react";

const NewTrailers = () => {
  const { data, isLoading } = useQuery<IDataMovies[]>({
    queryKey: ["movies"],
  });

  const [arrayTrailersFromMovies, setArrayTrailersFromMovies] = useState([]);

  useEffect(() => {
    if (data) {
      const modifiedData = data.map(
        ({ title, backGroundPoster, trailer, id }) => ({
          title,
          backGroundPoster,
          trailer,
          id,
        })
      );
      setArrayTrailersFromMovies(modifiedData);
    }
  }, [data]);

  return (
    <div className={styles.trailers}>
      <div className={styles.trailers__body}>
        <div className={styles.trailers__top}>
          <Title text="New trailers" />
        </div>
        <div className={styles.trailers__bottom}>
          <NewTrailersSwiper trailers={arrayTrailersFromMovies} />
        </div>
      </div>
    </div>
  );
};

export default NewTrailers;
