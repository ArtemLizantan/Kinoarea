import { useQuery } from "@tanstack/react-query";
import styles from "./movieMainRoles.module.scss";
import moviesService, { MovieData } from "../../../../services/movies.service";
import { Link, useParams } from "react-router-dom";
import Title from "../../../../components/title/Title";
import { useEffect, useState } from "react";

const MovieMainRoles = ({ nameFilm }: { nameFilm: string }) => {
  const { id } = useParams();

  const [key, setKey] = useState(`moviesActors${id}`);

  useEffect(() => {
    if (id) {
      const newNumberFromId = Number(id.match(/\d+/)?.[0]);
      setKey(`moviesActors${newNumberFromId}`);
    }
  }, [id]);

  const { data } = useQuery<MovieData[]>({
    queryKey: [key],
    queryFn: async () => {
      return moviesService.getRolesInMovies({ nameFilm });
    },
  });

  return (
    <div className={styles.roles}>
      <div className={styles.roles__body}>
        <div className={styles.roles__top}>
          <Title text={"In main roles:"} />
        </div>
        <div className={styles.roles__bottom}>
          {data?.map(({ img, name }: MovieData) => (
            <Link to={"/"} key={name} className={styles.roles__card}>
              <div className={styles.roles__img}>
                <img src={img} alt="photoArtist" />
              </div>
              <div className={styles.roles__name}>{name}</div>
              <div className={styles.roles__role}></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieMainRoles;
