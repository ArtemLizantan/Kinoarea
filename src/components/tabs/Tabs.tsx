import styles from "./tabs.module.scss";
import { ITabs, ITabsProps } from "../../interfaces/interfaces";

const Tabs = ({
  array,
  active,
  setOpenMenu,
  contextData,
  setContextData,
}: ITabsProps) => {
  const handleTabActive = (nameOfTab: string) => {
    setContextData(nameOfTab);
    setOpenMenu(false);
  };

  return (
    <ul className={`${styles.tabs}  ${active ? styles.active : ""}`}>
      {array.map(({ name, id }: ITabs) => (
        <li key={id} className={styles.tabs__item}>
          <button
            onClick={() => handleTabActive(name)}
            className={`${styles.tabs__btn} ${
              contextData === name ? styles.active : ""
            }`}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
