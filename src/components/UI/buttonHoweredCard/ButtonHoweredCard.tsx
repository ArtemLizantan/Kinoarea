import { MouseEventHandler } from "react";
import styles from "./buttonHoweredCard.module.scss";

interface IHoweredButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ButtonHoweredCard = ({ text, onClick }: IHoweredButtonProps) => {
  return (
    <button onClick={onClick} className={styles.cardBtn}>
      {text}
    </button>
  );
};

export default ButtonHoweredCard;
