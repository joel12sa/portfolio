import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./Work.module.css";

export function Work() {
  const { t } = useLanguage();
  const experiences = t.work.items;

  return (
    <section id="work" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>01</span>
        {t.work.title}
      </h2>
      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <article key={idx} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.year}>{exp.period}</span>
              <div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
              </div>
            </div>
            <ul className={styles.highlights}>
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {exp.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
