import CardsTop from "../../../../../components/cardsTop/CardsTop";
import { useMovies } from "../../../../../context/Context";

const tabs = [
  {
    name: "All",
    id: 1,
  },
  {
    name: "2024",
    id: 2,
  },
  {
    name: "2023",
    id: 3,
  },
  {
    name: "2022",
    id: 4,
  },
  {
    name: "2021",
    id: 5,
  },
  {
    name: "2020",
    id: 6,
  },
  {
    name: "2019",
    id: 7,
  },
];

const PopularTop = () => {
  const { tabsDataPopular, setTabsDataPopular } = useMovies();
  return (
    <CardsTop
      nameTitle={"Popular movies"}
      array={tabs}
      tabsData={tabsDataPopular}
      setTabsData={setTabsDataPopular}
    />
  );
};

export default PopularTop;
