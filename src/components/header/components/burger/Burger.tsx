import styles from "./burger.module.scss";
import { IoMdList } from "react-icons/io";
import { MouseEventHandler } from "react";

interface BurgerProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Burger = ({ onClick }: BurgerProps) => {
  return (
    <div className={styles.burger}>
      <button onClick={onClick} className={styles.burger__btn}>
        <IoMdList />
      </button>
    </div>
  );
};

export default Burger;
