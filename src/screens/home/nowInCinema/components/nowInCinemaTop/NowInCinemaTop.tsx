import { GiHamburgerMenu } from "react-icons/gi";
import Burger from "../../../../../components/header/components/burger/Burger";
import Tabs from "../../../../../components/tabs/Tabs";
import Title from "../../../../../components/title/Title";
import styles from "./nowInCinemaTop.module.scss";
import useResizeObserver from "use-resize-observer";
import { useState } from "react";

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
  const { ref, width } = useResizeObserver<HTMLDivElement>();
  const [openMenu, setOpenMenu] = useState(false);

  const mobile = width !== undefined ? width <= 567 : false;

  const handleMenuOpen = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div ref={ref} className={styles.cinemaTop}>
      <div className={styles.cinemaTop__body}>
        <div className={styles.cinemaTop__left}>
          <Title text="Now in cinema" />
          {mobile && (
            <div className={styles.burger}>
              <button onClick={handleMenuOpen} className={styles.burger__btn}>
                <GiHamburgerMenu />
              </button>
            </div>
          )}
        </div>
        <div className={styles.cinemaTop__center}>
          <span></span>
        </div>
        <div className={styles.cinemaTop__right}>
          <Tabs active={openMenu} array={tabs} />
        </div>
      </div>
    </div>
  );
};

export default NowInCinemaTop;
