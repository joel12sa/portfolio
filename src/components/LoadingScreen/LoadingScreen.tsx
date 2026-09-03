import { useState, useEffect } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./LoadingScreen.module.css";

export function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const { t } = useLanguage();
  const bootLines = t.loading;
  const [visibleLines, setVisibleLines] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (visibleLines < bootLines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 400);
      return () => clearTimeout(timer);
    }
    const fade = setTimeout(() => setFading(true), 600);
    const done = setTimeout(() => onFinish(), 1100);
    return () => { clearTimeout(fade); clearTimeout(done); };
  }, [visibleLines, bootLines.length, onFinish]);

  return (
    <div className={`${styles.overlay} ${fading ? styles.fadeOut : ""}`} aria-hidden="true">
      <div className={styles.terminal}>
        {bootLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={styles.line}>
            <span className={styles.ok}>[  OK  ]</span>
            <span className={styles.text}>{line}</span>
          </div>
        ))}
        {visibleLines < bootLines.length && (
          <div className={styles.cursorLine}>
            <span className={styles.blink}>_</span>
          </div>
        )}
      </div>
    </div>
  );
}
