import { useState } from "react";
import Links from "../UI/link/Link";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import Burger from "./components/burger/Burger";
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import HeaderSearch from "./components/search/HeaderSearch";
import SocialLinks from "./components/socialLinks/SocialLinks";
import styles from "./header.module.scss";
import useResizeObserver from "use-resize-observer";

const Header = () => {
  const { ref, width } = useResizeObserver<HTMLDivElement>();
  const [activeMenu, setActiveMenu] = useState(false);

  const pc = width !== undefined ? width >= 1440 : false;
  const mobile = width !== undefined ? width <= 900 : false;

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
                <SocialLinks />
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
                <SocialLinks />
              </div>
            )}
            {!mobile && <HeaderMenu />}
          </div>
          <div className={styles.header__right}>
            {pc && <HeaderSearch />}

            <Links
              boxShadow="0 0 15px 0 rgba(72, 113, 255, 0.8)"
              path="/"
              text="Войти"
              background="#3657cb"
            />
          </div>
        </div>

        <div
          className={`${styles.openMenu} ${activeMenu ? styles.active : ""}`}
        >
          <HeaderMenu logo="true" closeBtn="true" onClick={handleMenuOpen} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
