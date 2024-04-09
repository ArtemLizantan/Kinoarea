import { IMovieServicesGetFilmProps } from "../interfaces/interfaces";
import { db } from "./../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
  limit,
} from "firebase/firestore";

class MoviesServices {
  async getFilms(
    {
      dbFirebase,
      field,
      options,
      value,
      limitOfCards,
    }: IMovieServicesGetFilmProps,
    callback
  ) {
    const q = query(
      collection(db, dbFirebase),
      field && where(field, options, value),
      limit(limitOfCards)
    );

    onSnapshot(q, (snapshot) => {
      const moviesData = snapshot.docs.map((doc) => doc.data());
      callback(moviesData);
    });
  }

  async getRolesInMovies({ nameFilm }) {
    const actors = [];
    const querySnapshot = await getDocs(
      collection(db, "movies", nameFilm, "actors")
    );

    querySnapshot.forEach((doc) => {
      actors.push(doc.data());
    });

    return actors;
  }
}

const moviesService = new MoviesServices();
export default moviesService;
