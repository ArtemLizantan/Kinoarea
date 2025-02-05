import Item from "./item/Item";
import styles from "./items.module.scss";

import {
  MdAddReaction,
  MdOutlineScience,
  MdOutlineTheaterComedy,
} from "react-icons/md";
import { RiKnifeLine } from "react-icons/ri";
import { FaMountain, FaRegSadCry } from "react-icons/fa";
import { ReactElement } from "react";
import { ROUTES } from "../../../../routes";

interface IItemsData {
  id: number;
  genre: string;
  route: string;
  icon: ReactElement;
}

export const itemsData: IItemsData[] = [
  {
    id: 1,
    genre: "Action",
    route: ROUTES.CATEGORIES_ACTION,
    icon: <MdAddReaction />,
  },
  {
    id: 2,
    genre: "Thriller",
    route: ROUTES.CATEGORIES_THRILLER,
    icon: <RiKnifeLine />,
  },
  {
    id: 3,
    genre: "Comedy",
    route: ROUTES.CATEGORIES_COMEDY,
    icon: <MdOutlineTheaterComedy />,
  },
  {
    id: 4,
    genre: "Adventure",
    route: ROUTES.CATEGORIES_ADVENTURE,
    icon: <FaMountain />,
  },
  {
    id: 5,
    genre: "Science Fiction",
    route: ROUTES.CATEGORIES_SCI_FI,
    icon: <MdOutlineScience />,
  },
  {
    id: 6,
    genre: "Drama",
    route: ROUTES.CATEGORIES_DRAMA,
    icon: <FaRegSadCry />,
  },
];

const Items = () => {
  return (
    <div className={styles.items}>
      {itemsData.map((item) => (
        <Item
          key={item.id}
          icon={item.icon}
          title={item.genre}
          route={item.route}
        />
      ))}
    </div>
  );
};

export default Items;
