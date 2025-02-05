import styles from "./header.module.scss";
import Title from "../../../../components/title/Title";
import { useParams } from "react-router-dom";

const HeaderCategoriePage = () => {
  const { genre } = useParams();

  return (
    <div className={styles.header}>
      <div className={styles.header__body}>
        <Title text={genre?.toUpperCase()} />
      </div>
    </div>
  );
};

export default HeaderCategoriePage;
