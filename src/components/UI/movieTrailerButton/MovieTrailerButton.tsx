import { MouseEventHandler } from "react";
import styles from "./movieTrailerButton.module.scss";
import { CiPlay1 } from "react-icons/ci";
interface IBtn {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const MovieTrailerButton = ({ text, onClick }: IBtn) => {
  return (
    <button onClick={onClick} className={styles.trailerBtn}>
      <CiPlay1 />
      {text}
    </button>
  );
};

export default MovieTrailerButton;
