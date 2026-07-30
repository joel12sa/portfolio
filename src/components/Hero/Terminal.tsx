import { useState, useEffect } from "react";
import { useCountUp } from "../../hooks/useCountUp";
import styles from "./Hero.module.css";

interface Line {
  text: string;
  type: "prompt" | "key" | string;
}

const lines: Line[] = [
  { text: "franklin@portfolio --profile", type: "prompt" },
  { text: "\u251C\u2500 endpoints_built:", type: "key" },
  { text: "\u251C\u2500 mvp_delivery:", type: "key" },
  { text: "\u251C\u2500 languages:", type: "key" },
  { text: "\u251C\u2500 cloud_auth:", type: "key" },
  { text: "\u2514\u2500 status:", type: "key" },
];

const staticValues: (string | null)[] = [
  null,
  null,
  '"4 months"',
  null,
  '"AWS Cognito"',
  '"open to work"',
];

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState(1);
  const [revealIndex, setRevealIndex] = useState(-1);

  const endpointCount = useCountUp(8, 1200);
  const langCount = useCountUp(6, 1000);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 350);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  useEffect(() => {
    if (visibleLines < lines.length) return;
    if (revealIndex >= lines.length - 1) return;
    const timer = setTimeout(() => setRevealIndex((i) => i + 1), 300);
    return () => clearTimeout(timer);
  }, [visibleLines, revealIndex]);

  return (
    <div className={styles.terminal} role="region" aria-label="Profile terminal output">
      <div className={styles.terminalHeader}>
        <span className={styles.dot} style={{ background: "#FF5F57" }} />
        <span className={styles.dot} style={{ background: "#FEBC2E" }} />
        <span className={styles.dot} style={{ background: "#28C840" }} />
        <span className={styles.terminalTitle}>profile — zsh</span>
      </div>
      <div className={styles.terminalBody}>
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={styles.terminalLine}>
            {line.type === "prompt" && (
              <>
                <span className={styles.promptSymbol}>$ </span>
                <span className={styles.promptText}>{line.text}</span>
              </>
            )}
            {line.type === "key" && (
              <>
                <span className={styles.linePrefix}>{line.text}</span>
                <span className={styles.lineValue}>
                  {staticValues[i] !== null && revealIndex >= i ? (
                    <Typewriter text={staticValues[i] as string} />
                  ) : i === 1 ? (
                    <span ref={endpointCount.ref} className={styles.counter}>
                      {endpointCount.count}
                    </span>
                  ) : i === 3 ? (
                    <span ref={langCount.ref} className={styles.counter}>
                      {langCount.count}
                    </span>
                  ) : null}
                </span>
              </>
            )}
          </div>
        ))}
        {visibleLines >= lines.length && (
          <div className={styles.cursor} aria-hidden="true">
            <span className={styles.promptSymbol}>$ </span>
            <span className={styles.blink}>_</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Typewriter({ text }: { text: string }) {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (chars < text.length) {
      const timer = setTimeout(() => setChars((c) => c + 1), 60);
      return () => clearTimeout(timer);
    }
  }, [chars, text.length]);

  return <>{text.slice(0, chars)}</>;
}
