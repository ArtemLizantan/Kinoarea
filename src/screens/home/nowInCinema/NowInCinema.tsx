import NowInCinemaCards from "./components/nowInCinemaCards/NowInCinemaCards";
import { useQuery } from "@tanstack/react-query";
import moviesService from "../../../services/movies.service";
import { IDataMovies } from "../../../interfaces/interfaces";
import { useMovies } from "../../../context/Context";
import NowInCinemaTop from "./components/nowInCinemaTop/NowInCinemaTop";
import Container from "../../../components/container/Container";

const NowInCinema = () => {
  const { data, isLoading } = useQuery<IDataMovies[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      return new Promise((resolve: any) => {
        moviesService.getFilms(
          { dbFirebase: "movies", limitOfCards: 10 },
          resolve,
        );
      });
    },
  });

  const { tabsDataNowInCinema } = useMovies();

  const filteredCards = data?.filter((movie) => {
    if (tabsDataNowInCinema === "All") {
      return true;
    } else {
      return movie.genre.includes(tabsDataNowInCinema);
    }
  });

  const limitedCards = filteredCards?.slice(0, 8);

  return (
    <section>
      <Container>
        <div>
          <NowInCinemaTop />
          <NowInCinemaCards
            filteredCards={limitedCards}
            isLoading={isLoading}
          />
        </div>
      </Container>
    </section>
  );
};

export default NowInCinema;
