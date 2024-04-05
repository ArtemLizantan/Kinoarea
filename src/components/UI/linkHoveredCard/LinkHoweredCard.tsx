import { Link } from "react-router-dom";
import styles from "./linkHoweredCard.module.scss";

interface IHoweredLinkProps {
  text: string;
  path: string;
}

const LinkHoweredCard = ({ path, text }: IHoweredLinkProps) => {
  return (
    <Link className={styles.cardBtn} to={path}>
      {text}
    </Link>
  );
};

export default LinkHoweredCard;
