import { IDataMovies } from "../../interfaces/interfaces";
import MainInfoCard from "./components/mainInfoCard/MainInfoCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
const InfoCard = () => {
  const { data, isLoading } = useQuery<IDataMovies[]>({
    queryKey: ["movies"],
  });
  console.log(data);

  return (
    <div>
      <MainInfoCard />
    </div>
  );
};

export default InfoCard;
