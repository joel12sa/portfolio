import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./Projects.module.css";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>03</span>
        {t.projects.title}
      </h2>
      <div className={styles.grid}>
        {t.projects.items.map((project, idx) => (
          <article key={idx} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.name}>{project.name}</h3>
              <span className={styles.id}>{String(idx + 1).padStart(2, "0")}</span>
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.links}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {t.projects.live}
                </a>
              )}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {t.projects.github}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
