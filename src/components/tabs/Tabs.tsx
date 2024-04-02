import { useState } from "react";
import styles from "./tabs.module.scss";
import { ITabs, ITabsProps } from "../../interfaces/interfaces";

interface TabActiveType {
  [key: string]: boolean;
}

const Tabs = ({ array, active }: ITabsProps) => {
  const [tabActive, setTabActive] = useState<TabActiveType>({});

  const handleTabActive = (id: number) => {
    setTabActive({
      [id]: !tabActive[id],
    });
  };

  console.log(tabActive);

  return (
    <ul className={`${styles.tabs}  ${active ? styles.active : ""}`}>
      {array.map(({ name, id }: ITabs) => (
        <li key={id} className={styles.tabs__item}>
          <button
            onClick={() => handleTabActive(id)}
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
