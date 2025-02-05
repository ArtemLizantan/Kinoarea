import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { IDataMovies } from "../../interfaces/interfaces";
import styles from "./categoriePage.module.scss";
import FilmCard from "../../components/filmCard/FilmCard";
import Container from "../../components/container/Container";
import HeaderCategoriePage from "./components/headerCategoriePage/HeaderCategoriePage";

const CategoriePage = () => {
  const { genre } = useParams();

  const { data, isLoading } = useQuery<IDataMovies[]>({
    queryKey: ["movies"],
  });

  const filteredCards = data?.filter((movie) => {
    return movie.genre.includes(genre);
  });

  console.log(filteredCards);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!filteredCards) {
    return <div>Movie not found</div>;
  }

  return (
    <section className={styles.categorie}>
      <Container>
        <div className={styles.categorie__body}>
          <HeaderCategoriePage />
          <div className={styles.cards}>
            <div className={styles.cards__body}>
              {isLoading ? (
                <div>Loading....</div>
              ) : (
                filteredCards.map(
                  ({ title, posterPath, genre, id, voteAverage }) => (
                    <FilmCard
                      id={id}
                      key={id}
                      name={title}
                      img={posterPath}
                      genre={genre}
                      rating={voteAverage}
                    />
                  ),
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoriePage;
