import { Link } from "react-router-dom";
import styles from "./menu.module.scss";
import Logo from "../../../logo/Logo";
import { IoMdClose } from "react-icons/io";
import { MouseEventHandler } from "react";

interface INavLink {
  name: string;
  path: string;
  id: number;
}

interface IMenuProps {
  logo?: string;
  closeBtn?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const navLinks: INavLink[] = [
  { name: "Афиша", path: "/", id: 1 },
  { name: "Медиа", path: "/", id: 2 },
  { name: "Фильмы", path: "/", id: 3 },
  { name: "Актеры", path: "/", id: 4 },
  { name: "Новости", path: "/", id: 5 },
  { name: "Подборки", path: "/", id: 6 },
  { name: "Категории", path: "/", id: 7 },
];

const HeaderMenu = ({ logo, closeBtn, onClick }: IMenuProps) => {
  return (
    <>
      {logo && closeBtn && (
        <div className={styles.menu__burger}>
          <Logo />
          <button onClick={onClick} className={styles.menu__closeBtn}>
            <IoMdClose />
          </button>
        </div>
      )}
      <ul className={styles.menu}>
        {navLinks.map(({ name, path, id }) => (
          <li key={id} className={styles.menu__item}>
            <Link className={styles.menu__itemLink} to={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeaderMenu;
