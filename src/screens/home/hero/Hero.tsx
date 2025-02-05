import { motion } from "framer-motion";
import { AuroraBackground } from "../../../components/UI/AuroraBg/AuroraBg";
import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold text-white text-center">
            Experience the Magic of Movies
          </div>
          <div className="font-extralight text-base md:text-4xl text-white text-center wtext-neutral-200 py-4">
            Immerse Yourself in the Best Cinematic Adventures
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
}
