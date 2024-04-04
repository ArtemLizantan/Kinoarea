import styles from "./title.module.scss";

interface ITitle {
  text: string | undefined;
}

const Title = ({ text }: ITitle) => {
  return <h2 className={styles.title}>{text}</h2>;
};

export default Title;
