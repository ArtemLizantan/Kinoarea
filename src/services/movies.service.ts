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
  async getNewMovies(callback) {
    const q = query(
      collection(db, "movies"),
      // where("year", "==", "2024"),
      limit(10)
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
  async getSimilarFilms({ genreFilm }, callback) {
    const q = query(
      collection(db, "movies"),
      where("genre", "==", genreFilm),
      limit(5)
    );

    onSnapshot(q, (snapshot) => {
      const moviesData = snapshot.docs.map((doc) => doc.data());
      callback(moviesData);
    });
  }
}

const moviesService = new MoviesServices();
export default moviesService;
