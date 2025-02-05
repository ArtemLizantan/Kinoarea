import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import styles from "./cardsTop.module.scss";
import useResizeObserver from "use-resize-observer";
import { useState } from "react";
import Title from "../title/Title";
import Tabs from "../tabs/Tabs";

const CardsTop = ({ tabsData, setTabsData, array, nameTitle }) => {
  const { ref, width } = useResizeObserver<HTMLDivElement>();
  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);

  const mobile = width !== undefined ? width <= 567 : false;

  const handleMenuOpen = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div ref={ref} className={styles.cinemaTop}>
      <div className={styles.cinemaTop__body}>
        <div className={styles.cinemaTop__left}>
          <Title text={nameTitle} />
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
            array={array}
            setContextData={setTabsData}
            contextData={tabsData}
          />
        </div>
      </div>
    </div>
  );
};

export default CardsTop;
