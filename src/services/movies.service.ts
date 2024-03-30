// moviesService.js
import { db } from "./../firebase";
import { collection, onSnapshot } from "firebase/firestore";

class MoviesServices {
  async getNewMovies(callback) {
    const productsCollection = collection(db, "nowInCinema");

    onSnapshot(productsCollection, (snapshot) => {
      const moviesData = snapshot.docs.map((doc) => doc.data());
      callback(moviesData); // Вызываем callback с полученными данными
    });
  }
}

const moviesService = new MoviesServices();
export default moviesService;
