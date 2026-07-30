import { useState, useEffect } from "react";
import styles from "./LoadingScreen.module.css";

const bootLines = [
  { text: "Loading profile...", ok: true },
  { text: "Fetching endpoints...", ok: true },
  { text: "Ready.", ok: true },
];

export function LoadingScreen({ onFinish }: { onFinish: () => void }) {
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
  }, [visibleLines, onFinish]);

  return (
    <div className={`${styles.overlay} ${fading ? styles.fadeOut : ""}`} aria-hidden="true">
      <div className={styles.terminal}>
        {bootLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={styles.line}>
            <span className={styles.ok}>[{line.ok ? "  OK  " : "FAIL"}]</span>
            <span className={styles.text}>{line.text}</span>
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
