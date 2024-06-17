import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";
import { sidebarData } from "./sidebarData";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__body}>
        <div className={styles.sidebar__btns}>
          {sidebarData.map(({ id, path, icon: Icon }) => (
            <Link key={id} to={path}>
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
