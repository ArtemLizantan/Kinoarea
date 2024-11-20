import { Link } from "react-router-dom";
import styles from "./search.module.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ROUTES } from "../../../../routes";

const HeaderSearch = () => {
  return (
    <div className={styles.search}>
      <Link to={ROUTES.SEARCH} className={styles.search__btn}>
        <HiMagnifyingGlass />
      </Link>
    </div>
  );
};

export default HeaderSearch;
