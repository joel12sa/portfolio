import { useState, useEffect, useCallback } from "react";
import styles from "./Navbar.module.css";

const sections = [
  { id: "hero", label: "Franklin" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "CV" },
];

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : Infinity };
      });

      let closest = offsets[0].id;
      for (const { id, top } of offsets) {
        if (Math.abs(top) < Math.abs(document.getElementById(closest)?.getBoundingClientRect().top ?? Infinity)) {
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

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.inner} aria-label="Main navigation">
        <button
          className={styles.logo}
          onClick={() => handleClick("hero")}
          aria-label="Scroll to top"
        >
          {sections[0].label}
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

        <ul className={`${styles.links} ${menuOpen ? styles.visible : ""}`}>
          {sections.slice(1).map(({ id, label }) => (
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
      </nav>
    </header>
  );
}
