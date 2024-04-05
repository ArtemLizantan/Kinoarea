import { useQuery } from "@tanstack/react-query";
import styles from "./movieMainRoles.module.scss";
import { IDataMovies } from "../../../../interfaces/interfaces";
import moviesService from "../../../../services/movies.service";
import { Link, useParams } from "react-router-dom";
import Title from "../../../../components/title/Title";
import { useEffect, useState } from "react";

const MovieMainRoles = ({ nameFilm }: { nameFilm: string | undefined }) => {
  const { id } = useParams();
  const [numberFromId, setNumberFromId] = useState(
    Number(id?.match(/\d+/)?.[0])
  );
  //новый кеш для актеров каждого фильма
  const [key, setKey] = useState(`moviesActors${numberFromId}`);

  useEffect(() => {
    if (id) {
      const newNumberFromId = Number(id.match(/\d+/)?.[0]);
      setNumberFromId(newNumberFromId);
      setKey(`moviesActors${newNumberFromId}`);
    }
  }, [id]);

  const { data } = useQuery<IDataMovies[]>({
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
          {data?.map(({ img, name }) => (
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
