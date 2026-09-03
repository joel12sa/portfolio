import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./About.module.css";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>04</span>
        {t.about.title}
      </h2>
      <div className={styles.bio}>
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
