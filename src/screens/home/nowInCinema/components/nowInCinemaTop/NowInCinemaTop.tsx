import CardsTop from "../../../../../components/cardsTop/CardsTop";
import { useMovies } from "../../../../../context/Context";

const tabs = [
  {
    name: "All",
    id: 1,
  },
  {
    name: "Action",
    id: 2,
  },
  {
    name: "Adventure",
    id: 3,
  },
  {
    name: "Comedy",
    id: 4,
  },
  {
    name: "Science Fiction",
    id: 5,
  },
  {
    name: "Thriller",
    id: 6,
  },
  {
    name: "Drama",
    id: 7,
  },
];

const NowInCinemaTop = () => {
  const { tabsDataNowInCinema, setTabsDataNowInCinema } = useMovies();
  return (
    <CardsTop
      nameTitle={"Now in cinema"}
      array={tabs}
      tabsData={tabsDataNowInCinema}
      setTabsData={setTabsDataNowInCinema}
    />
  );
};

export default NowInCinemaTop;
