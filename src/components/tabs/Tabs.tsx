import { useState } from "react";
import styles from "./tabs.module.scss";
import { ITabs, ITabsProps } from "../../interfaces/interfaces";

interface TabActiveType {
  [key: string]: boolean;
}

const Tabs = ({
  array,
  active,
  setTabsData,
  setOpenMenu,
}: ITabsProps) => {
  const [tabActive, setTabActive] = useState<TabActiveType>({ 1: true });

  const handleTabActive = (id: number, nameOfTab: string) => {
    setTabActive({
      [id]: !tabActive[id],
    });
    setTabsData(nameOfTab);
    setOpenMenu(false);
  };

  return (
    <ul className={`${styles.tabs}  ${active ? styles.active : ""}`}>
      {array.map(({ name, id }: ITabs) => (
        <li key={id} className={styles.tabs__item}>
          <button
            onClick={() => handleTabActive(id, name)}
            className={`${styles.tabs__btn} ${
              tabActive[id] ? styles.active : ""
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
