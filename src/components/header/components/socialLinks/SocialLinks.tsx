import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./social.module.scss";

interface IIcons {
  name: React.ReactNode;
  path: string;
  id: number;
}

const icons: IIcons[] = [
  { name: <SlSocialVkontakte />, path: "/", id: 1 },
  { name: <FaInstagram />, path: "/", id: 2 },
  { name: <FaFacebookF />, path: "/", id: 3 },
  { name: <FaTwitter />, path: "/", id: 4 },
];

const SocialLinks = () => {
  return (
    <ul className={styles.social}>
      {icons.map(({ name, path, id }) => (
        <li key={id} className={styles.social__item}>
          <Link to={path} className={styles.social__itemLink}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
