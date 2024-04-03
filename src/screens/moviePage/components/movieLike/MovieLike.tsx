import InteractionControls from "../../../../components/UI/interactionControls/InteractionControls";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { IoIosHeart } from "react-icons/io";
import styles from "./movieLike.module.scss";

const MovieLike = () => {
  return (
    <div className={styles.movieControls}>
      <InteractionControls icon={<BiSolidLike />} />
      <InteractionControls icon={<BiSolidDislike />} />
      <InteractionControls icon={<IoIosHeart />} />
    </div>
  );
};

export default MovieLike;
