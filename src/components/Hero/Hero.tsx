import { Terminal } from "./Terminal";
import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <Terminal />
        <h1 className={styles.name}>
          Franklin Joel <span className={styles.accent}>Sasig</span>
        </h1>
        <p className={styles.tagline}>{t.hero.tagline}</p>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>
      </div>
    </section>
  );
}
