import { Link } from "react-router-dom";
import styles from "./link.module.scss";
interface IBtn {
  text: string;
  background: string;
  path: string;
  boxShadow?: string;
}

const Links = ({ text, background, path, boxShadow }: IBtn) => {
  return (
    <Link
      to={path}
      style={{ background: background, boxShadow: boxShadow }}
      className={styles.link}
    >
      {text}
    </Link>
  );
};

export default Links;
