import { ReactNode } from "react";
import styles from "./interactionControls.module.scss";

interface IInteractionControlsProps {
  icon: ReactNode;
}

const InteractionControls = ({ icon }: IInteractionControlsProps) => {
  return <button className={styles.interactionControls}>{icon}</button>;
};

export default InteractionControls;
