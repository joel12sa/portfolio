import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./Navbar.module.css";

const sectionIds = ["hero", "work", "skills", "projects", "about", "contact", "resume"];

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : Infinity };
      });

      let closest = offsets[0].id;
      for (const { id, top } of offsets) {
        const current = document.getElementById(closest)?.getBoundingClientRect().top ?? Infinity;
        if (Math.abs(top) < Math.abs(current)) {
          closest = id;
        }
      }
      setActive(closest);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = useCallback((id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const navLinks = [
    { id: "work", label: t.nav.work },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
    { id: "resume", label: t.nav.cv },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.inner} aria-label="Main navigation">
        <button
          className={styles.logo}
          onClick={() => handleClick("hero")}
          aria-label="Scroll to top"
        >
          Franklin
        </button>

        <div className={styles.right}>
          <ul className={`${styles.links} ${menuOpen ? styles.visible : ""}`}>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`${styles.link} ${active === id ? styles.active : ""}`}
                  onClick={() => handleClick(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className={styles.langToggle}
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            aria-label={t.nav.language}
          >
            <span className={`${styles.langOption} ${lang === "en" ? styles.langActive : ""}`}>
              EN
            </span>
            <span className={styles.langDivider}>/</span>
            <span className={`${styles.langOption} ${lang === "es" ? styles.langActive : ""}`}>
              ES
            </span>
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
          </button>
        </div>
      </nav>
    </header>
  );
}
