import { Link } from "react-router-dom";
import styles from "./social.module.scss";
import { IIcons, ISocialLinksProps } from "../../../../interfaces/interfaces";

const SocialLinks = ({ array }: ISocialLinksProps) => {
  return (
    <ul className={styles.social}>
      {array.map(({ name, path, id }: IIcons) => (
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
