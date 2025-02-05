import { ReactElement } from "react";
import Button from "../../../../../components/UI/Button";
import styles from "./item.module.scss";

interface IItemCategoryProps {
  title: string;
  route: string;
  icon: ReactElement;
}

const Item = ({ title, route, icon }: IItemCategoryProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__body}>
        {icon}
        <div className={styles.item__content}>
          <h4 className={styles.item__title}>{title}</h4>
          <Button background="#f2f60f" text="Check" route={route} />
        </div>
      </div>
    </div>
  );
};

export default Item;
