import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>03</span>
        About
      </h2>
      <div className={styles.bio}>
        <p>
          I'm a Software Engineering graduate from Universidad de las Fuerzas Armadas – ESPE,
          passionate about building backend systems, predictive dashboards, and modular ERP
          solutions. I focus on clean architecture, well-documented APIs, and delivery that
          actually ships.
        </p>
        <p>
          Currently working with Odoo at Sellside SpA and exploring cloud auth with AWS Amplify.
          I also lead finance at AIESEC Ecuador (ESPE), where I manage budgets, reports, and
          financial indicators for the local committee.
        </p>
        <p>
          I speak Spanish natively and am actively improving my English (B1 &rarr; next level).
        </p>
      </div>
    </section>
  );
}
