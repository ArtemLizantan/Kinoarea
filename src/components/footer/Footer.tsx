import { SlSocialVkontakte } from "react-icons/sl";
import { IIcons, INavLink } from "../../interfaces/interfaces";
import Container from "../container/Container";
import SocialLinks from "../header/components/socialLinks/SocialLinks";
import styles from "./footer.module.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import HeaderMenu from "../header/components/headerMenu/HeaderMenu";
import { Link } from "react-router-dom";

const icons: IIcons[] = [
  { name: <SlSocialVkontakte />, path: "/", id: 1 },
  { name: <FaInstagram />, path: "/", id: 2 },
  { name: <FaFacebookF />, path: "/", id: 3 },
  { name: <FaTwitter />, path: "/", id: 4 },
  { name: <FaYoutube />, path: "/", id: 5 },
];

const navLinks: INavLink[] = [
  { name: "Афиша", path: "/", id: 1 },
  { name: "Новости", path: "/", id: 2 },
  { name: "Персоны", path: "/", id: 3 },
  { name: "Рейтинги", path: "/", id: 4 },
  { name: "Рецензии", path: "/", id: 5 },
  { name: "Каталог фильмов", path: "/", id: 6 },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footer__body}>
          <div className={styles.footer__top}>
            <SocialLinks array={icons} />
          </div>
          <div className={styles.footer__center}>
            <HeaderMenu array={navLinks} />
          </div>
          <div className={styles.footer__bottom}>
            <div className={styles.footer__copy}>
              <h4>2020 © Kinoarea. Все права защищены</h4>
              <Link to={"/"}>Политика конфиденциальности</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
