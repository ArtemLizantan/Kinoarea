import { IMovieServicesGetFilmProps } from "../interfaces/interfaces";
import { db } from "./../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
  QueryConstraint,
  limit as firestoreLimit,
  WhereFilterOp,
} from "firebase/firestore";

export interface MovieData {
  [key: string]: any;
  img: string;
  name: string;
}

interface GetFilmsCallback {
  (moviesData: MovieData[]): void;
}

class MoviesServices {
  async getFilms(
    {
      dbFirebase,
      field,
      options,
      value,
      limitOfCards,
      search,
    }: IMovieServicesGetFilmProps,
    callback: GetFilmsCallback,
  ): Promise<void> {
    const constraints: QueryConstraint[] = [
      field && where(field, options as WhereFilterOp, value),
      limitOfCards && firestoreLimit(limitOfCards),
    ].filter(Boolean) as QueryConstraint[];

    const q = query(collection(db, dbFirebase), ...constraints);

    onSnapshot(q, (snapshot) => {
      let moviesData = snapshot.docs.map((doc) => doc.data() as MovieData);

      if (search) {
        moviesData = moviesData.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase()),
        );
      }

      callback(moviesData);
    });
  }

  async getRolesInMovies({
    nameFilm,
  }: {
    nameFilm: string;
  }): Promise<MovieData[]> {
    const actors: MovieData[] = [];
    const querySnapshot = await getDocs(
      collection(db, "movies", nameFilm, "actors"),
    );

    querySnapshot.forEach((doc) => {
      actors.push(doc.data() as MovieData);
    });

    return actors;
  }
}

const moviesService = new MoviesServices();
export default moviesService;
