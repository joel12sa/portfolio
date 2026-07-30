import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "Dart", "CSS", "SQL"],
  },
  {
    label: "Backend & Frameworks",
    items: ["FastAPI", "Node.js", "Spring Boot", "Next.js", "React", "Flutter"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "CI/CD", "AWS Amplify", "Cognito", "Firebase", "N8N"],
  },
  {
    label: "Databases & Tools",
    items: ["PostgreSQL", "Git", "Swagger", "Pytest", "JWT", "Odoo"],
  },
];

export function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>02</span>
        Skills
      </h2>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.label} className={styles.card}>
            <h3 className={styles.groupLabel}>{group.label}</h3>
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
