import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Tabs from "../../../../../components/tabs/Tabs";
import Title from "../../../../../components/title/Title";
import styles from "./nowInCinemaTop.module.scss";
import useResizeObserver from "use-resize-observer";
import { useState } from "react";
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
  const { tabsData, setTabsData } = useMovies();
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
                {openMenu ? <IoMdClose /> : <GiHamburgerMenu />}
              </button>
            </div>
          )}
        </div>
        <div className={styles.cinemaTop__center}>
          <span></span>
        </div>
        <div className={styles.cinemaTop__right}>
          <Tabs
            setOpenMenu={setOpenMenu}
            active={openMenu}
            array={tabs}
            setContextData={setTabsData}
            contextData={tabsData}
          />
        </div>
      </div>
    </div>
  );
};

export default NowInCinemaTop;
