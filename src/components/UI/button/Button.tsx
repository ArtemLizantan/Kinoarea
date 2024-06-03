import styles from "./btn.module.scss";
interface IBtn {
  text: string;
  background: string;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  color: string;
}

const Button = ({ text, background, color, type, disabled }: IBtn) => {
  return (
    <button
      disabled={disabled}
      type={type}
      style={{ background: background, color: color }}
      className={styles.btn}
    >
      {text}
    </button>
  );
};

export default Button;
