import { db } from "./../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

class MoviesServices {
  async getNewMovies(callback) {
    const q = query(collection(db, "movies"), where("year", "==", "2024"));

    onSnapshot(q, (snapshot) => {
      const moviesData = snapshot.docs.map((doc) => doc.data());
      callback(moviesData);
    });
  }
}

const moviesService = new MoviesServices();
export default moviesService;
