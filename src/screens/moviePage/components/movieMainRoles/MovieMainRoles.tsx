import { useQuery } from "@tanstack/react-query";
import styles from "./movieMainRoles.module.scss";
import { IDataMovies } from "../../../../interfaces/interfaces";
import moviesService from "../../../../services/movies.service";
import { Link } from "react-router-dom";

const MovieMainRoles = ({ nameFilm }) => {
  const { data } = useQuery<IDataMovies[]>({
    queryKey: ["moviesActors"],
    queryFn: async () => {
      return moviesService.getRolesInMovies({ nameFilm });
    },
  });
  console.log("data getRolesInMovies", data);

  return (
    <div className={styles.roles}>
      <div className={styles.roles__body}>
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
  );
};

export default MovieMainRoles;
