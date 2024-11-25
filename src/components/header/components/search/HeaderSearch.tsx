import styles from "./search.module.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";

interface IHeaderSearch {
  onClick: () => void; // Event handler for the search button click event.
}

const HeaderSearch = ({ onClick }: IHeaderSearch) => {
  return (
    <div className={styles.search}>
      <button type="button" onClick={onClick} className={styles.search__btn}>
        <HiMagnifyingGlass />
      </button>
    </div>
  );
};

export default HeaderSearch;
