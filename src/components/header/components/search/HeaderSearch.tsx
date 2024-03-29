import { useState } from "react";
import Logo from "../../../logo/Logo";
import styles from "./search.module.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
const HeaderSearch = () => {
  const [activeSearch, setActiveSearch] = useState(false);

  const handleActiveSearch = () => {
    setActiveSearch((prev) => !prev);
  };

  return (
    <div className={styles.search}>
      <button onClick={handleActiveSearch} className={styles.search__btn}>
        <HiMagnifyingGlass />
      </button>
      <div className={`${styles.search__window} ${activeSearch ? styles.active : ""}`}>
        <div className={styles.search__block}>
          <div className={styles.search__top}>
            <Logo />
          </div>
          <div className={styles.search__center}>
            <input
              placeholder="Введите название фильма или имя режиссера"
              className={styles.search__input}
            />
            <button className={styles.search__inputBtn}>
              <HiMagnifyingGlass />
            </button>
          </div>
          <div className={styles.search__right}>
            <button onClick={handleActiveSearch} className={styles.search__close}>
              <IoMdClose />
            </button>
          </div>
        </div>
        {/* <div className={styles.search__bottom}>

        </div> */}
      </div>
    </div>
  );
};

export default HeaderSearch;
