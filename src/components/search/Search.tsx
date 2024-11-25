import React, { useState } from "react";
import styles from "./search.module.scss";
import { IoMdClose } from "react-icons/io";
import moviesService from "../../services/movies.service";
import { IDataMovies } from "../../interfaces/interfaces";
import { useQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import Items from "./items/Items";
import { ROUTES } from "../../routes";

interface ISearchProps {
  onClose: () => void;
  active: boolean;
}

const Search = ({ onClose, active }: ISearchProps) => {
  const [searchItem, setSearchItem] = useState("");

  const debouncedSearchItem = debounce((value: string) => {
    setSearchItem(value);
  }, 500);

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery<IDataMovies[]>({
    queryKey: ["search", searchItem],
    queryFn: async () => {
      return new Promise((resolve) => {
        moviesService.getFilms(
          { dbFirebase: "movies", search: searchItem },
          (moviesData) => {
            resolve(moviesData as unknown as IDataMovies[]);
          },
        );
      });
    },
    enabled: !!searchItem,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchItem(e.target.value);
  };

  return (
    <div className={`${styles.search} ${active ? "_active" : "hidden"}`}>
      <div className={styles.search__body}>
        <form className={styles.search__form} action="">
          <div className={styles.search__wrap}>
            <input
              type="text"
              placeholder="Find a film..."
              className={styles.search__input}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <div className={styles.search__results}>
          {isLoading && <p className={styles.search__nofound}>Loading...</p>}
          {isError && (
            <p className={styles.search__nofound}>
              Something went wrong. Try again later.
            </p>
          )}
          {!isLoading &&
            movies &&
            movies.map((movie) => (
              <Items
                img={movie.posterPath}
                title={movie.title}
                key={movie.id}
                genre={movie.genre}
                route={`${ROUTES.MOVIE}/:id${movie.id}`}
                voteAverage={movie.voteAverage}
              />
            ))}
          {!isLoading && !movies?.length && searchItem && (
            <p className={styles.search__nofound}>No movies found.</p>
          )}
        </div>
      </div>
      <button onClick={onClose} type="button" className={styles.search__close}>
        <IoMdClose />
      </button>
    </div>
  );
};

export default Search;
