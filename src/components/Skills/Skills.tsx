import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    items: ["Python", "Java", "TypeScript", "JavaScript", "Dart", "CSS", "SQL"],
  },
  {
    items: ["FastAPI", "Node.js", "Spring Boot", "Next.js", "React", "Flutter"],
  },
  {
    items: ["Docker", "CI/CD", "AWS Amplify", "Cognito", "Firebase", "N8N"],
  },
  {
    items: ["PostgreSQL", "Git", "Swagger", "Pytest", "JWT", "Odoo"],
  },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>02</span>
        {t.skills.title}
      </h2>
      <div className={styles.grid}>
        {skillGroups.map((group, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.groupLabel}>{t.skills.groups[i]}</h3>
            <div className={styles.items}>
              {group.items.map((item) => (
                <span key={item} className={styles.chip}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
