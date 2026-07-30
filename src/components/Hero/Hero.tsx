import { Terminal } from "./Terminal";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <Terminal />
        <h1 className={styles.name}>
          Franklin Joel <span className={styles.accent}>Sasig</span>
        </h1>
        <p className={styles.tagline}>
          Full Stack Developer &bull; Backend focused &bull; Odoo specialist
        </p>
        <p className={styles.subtitle}>
          I build REST APIs, predictive dashboards, and modular ERP systems.
          Software Engineering graduate turned builder.
        </p>

      </div>
    </section>
  );
}
