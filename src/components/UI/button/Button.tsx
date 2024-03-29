import styles from "./btn.module.scss";
interface IBtn {
  text: string;
  background: string;
  type: "submit" | "reset" | "button" | undefined;
}

const Button = ({ text, background, type }: IBtn) => {
  return (
    <button
      type={type}
      style={{ background: background }}
      className={styles.btn}
    >
      {text}
    </button>
  );
};

export default Button;
