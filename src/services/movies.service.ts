import { apiPath } from "./../vars";
import axios from "axios";

class MoviesServices {
  private type = "type=movie";

  async getNewMovies() {
    return axios.get(`${apiPath}&${this.type}&y=2023&plot=full`);
  }
}

export default new MoviesServices();
