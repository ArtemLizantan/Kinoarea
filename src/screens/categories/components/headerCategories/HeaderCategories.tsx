import Title from "../../../../components/title/Title";
import styles from "./header.categories.module.scss";
import { headerData } from "./header.data";

const HeaderCategories = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__body}>
        <Title text={headerData.title} />
        <p className="subtitle">{headerData.subtitle}</p>
      </div>
    </div>
  );
};

export default HeaderCategories;
