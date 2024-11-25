import { useState } from "react";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import Burger from "./components/burger/Burger";
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import HeaderSearch from "./components/search/HeaderSearch";
import styles from "./header.module.scss";
import useResizeObserver from "use-resize-observer";

import { ROUTES } from "../../routes";
import Button from "../UI/Button";
import { navLinks } from "./header.data";
import Search from "../search/Search";

const Header = () => {
  const { ref, width } = useResizeObserver<HTMLDivElement>();
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);

  const pc = width !== undefined ? width >= 1440 : false;
  const mobile = width !== undefined ? width <= 991 : false;

  const handleMenuOpen = () => {
    setActiveMenu((prev) => !prev);
  };

  const handleSearchOpen = () => {
    setActiveSearch((prev) => !prev);
    document.querySelector("body")?.classList.add("_lock");
  };

  const handleSearchClose = () => {
    setActiveSearch(false);
    document.querySelector("body")?.classList.remove("_lock");
  };

  return (
    <>
      <header ref={ref} className={styles.header}>
        <Container>
          <div className={styles.header__body}>
            <div className={styles.header__left}>
              {pc && <Logo />}
              {!pc && !mobile && <HeaderSearch onClick={handleSearchOpen} />}
              {mobile && (
                <div className={styles.header__leftMobile}>
                  <Burger onClick={handleMenuOpen} />
                  <HeaderSearch onClick={handleSearchOpen} />
                </div>
              )}
            </div>
            <div className={styles.header__center}>
              {!pc && (
                <div className={styles.header__tabletCenter}>
                  <Logo />
                </div>
              )}
              {!mobile && <HeaderMenu array={navLinks} />}
            </div>
            <div className={styles.header__right}>
              {pc && <HeaderSearch onClick={handleSearchOpen} />}

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
      <Search active={activeSearch} onClose={handleSearchClose} />
    </>
  );
};

export default Header;
