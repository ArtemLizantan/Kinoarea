import { useState } from "react";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import Burger from "./components/burger/Burger";
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import HeaderSearch from "./components/search/HeaderSearch";
import SocialLinks from "./components/socialLinks/SocialLinks";
import styles from "./header.module.scss";
import useResizeObserver from "use-resize-observer";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IIcons, INavLink } from "../../interfaces/interfaces";
import { ROUTES } from "../../routes";
import Button from "../UI/Button";

const icons: IIcons[] = [
  { name: <SlSocialVkontakte />, path: "/", id: 1 },
  { name: <FaInstagram />, path: "/", id: 2 },
  { name: <FaFacebookF />, path: "/", id: 3 },
  { name: <FaTwitter />, path: "/", id: 4 },
];

const navLinks: INavLink[] = [
  { name: "Schedule", path: "/", id: 1 },
  { name: "Media", path: "/", id: 2 },
  { name: "Movies", path: "/", id: 3 },
  { name: "Actors", path: "/", id: 4 },
  { name: "News", path: "/", id: 5 },
  { name: "Collections", path: "/", id: 6 },
  { name: "Categories", path: "/", id: 7 },
];

const Header = () => {
  const { ref, width } = useResizeObserver<HTMLDivElement>();
  const [activeMenu, setActiveMenu] = useState(false);

  const pc = width !== undefined ? width >= 1440 : false;
  const mobile = width !== undefined ? width <= 991 : false;

  const handleMenuOpen = () => {
    setActiveMenu((prev) => !prev);
  };

  return (
    <header ref={ref} className={styles.header}>
      <Container>
        <div className={styles.header__body}>
          <div className={styles.header__left}>
            {pc && (
              <>
                <Logo />
                <SocialLinks array={icons} />
              </>
            )}
            {!pc && !mobile && <HeaderSearch />}
            {mobile && (
              <div className={styles.header__leftMobile}>
                <Burger onClick={handleMenuOpen} />
                <HeaderSearch />
              </div>
            )}
          </div>
          <div className={styles.header__center}>
            {!pc && (
              <div className={styles.header__tabletCenter}>
                <Logo />
                <SocialLinks array={icons} />
              </div>
            )}
            {!mobile && <HeaderMenu array={navLinks} />}
          </div>
          <div className={styles.header__right}>
            {pc && <HeaderSearch />}

            <Button route={ROUTES.LOGIN} text="Login" />
          </div>
        </div>

        <div
          className={`${styles.openMenu} ${activeMenu ? styles.active : ""}`}
        >
          <HeaderMenu
            array={navLinks}
            logo="true"
            closeBtn="true"
            onClick={handleMenuOpen}
            menu="true"
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
