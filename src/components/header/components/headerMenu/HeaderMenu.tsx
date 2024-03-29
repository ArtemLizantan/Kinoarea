import { Link } from "react-router-dom";
import styles from "./menu.module.scss";
import Logo from "../../../logo/Logo";
import { IoMdClose } from "react-icons/io";
import { IMenuProps, INavLink } from "../../../../interfaces/interfaces";

const HeaderMenu = ({ logo, closeBtn, onClick, array, menu }: IMenuProps) => {
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
      <ul
        style={{ overflowX: menu ? "auto" : "unset" }}
        className={styles.menu}
      >
        {array.map(({ name, path, id }: INavLink) => (
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
