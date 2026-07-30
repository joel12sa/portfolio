import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>04</span>
        Contact
      </h2>
      <p className={styles.text}>
        I'm open to freelance, internship, and full-time opportunities.
        Reach out and let's build something.
      </p>
      <div className={styles.links}>
        <a href="mailto:sasigjo3190@gmail.com" className={styles.link}>
          <span className={styles.linkLabel}>Email</span>
          <span className={styles.linkValue}>sasigjo3190@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/franklin-joel-sasig-abrajan" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <span className={styles.linkLabel}>LinkedIn</span>
          <span className={styles.linkValue}>/in/franklin-joel-sasig-abrajan</span>
        </a>
        <a href="https://github.com/franjo3190" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <span className={styles.linkLabel}>GitHub</span>
          <span className={styles.linkValue}>/franjo3190</span>
        </a>
        <a href="/CV_Franklin_Joel_Sasig.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <span className={styles.linkLabel}>CV</span>
          <span className={styles.linkValue}>Download PDF &darr;</span>
        </a>
      </div>
    </section>
  );
}
