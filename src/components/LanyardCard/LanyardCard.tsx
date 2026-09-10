import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import styles from "./LanyardCard.module.css";

interface LanyardCardProps {
  photoUrl?: string;
  name: string;
  role: string;
}

const DRAG_CONSTRAINTS = {
  top: -36,
  bottom: 130,
  left: -120,
  right: 120,
};

const DROP_SPRING = {
  type: "spring",
  stiffness: 160,
  damping: 13,
  mass: 1.15,
} as const;
const RETURN_SPRING = {
  type: "spring",
  stiffness: 200,
  damping: 13,
  mass: 0.9,
} as const;

const CARD_TOP = 120;
const ANCHOR_X = 150;

export function LanyardCard({ photoUrl, name, role }: LanyardCardProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);

  useEffect(() => {
    const controls: { stop: () => void }[] = [];

    controls.push(
      animate(opacity, 1, reduceMotion ? { duration: 0.25 } : { duration: 0.6 })
    );

    if (!reduceMotion) {
      y.set(window.innerHeight * -0.5);
      controls.push(animate(y, 0, DROP_SPRING));
    }

    return () => controls.forEach((c) => c.stop());
  }, [reduceMotion, opacity, y]);

  const pathD = useTransform(
    [x, y],
    ([vx, vy]) => {
      const endX = ANCHOR_X + (vx as number);
      const endY = CARD_TOP + (vy as number);
      const controlX = ANCHOR_X + (vx as number) * 0.5;
      const controlY = (CARD_TOP + (vy as number)) * 0.45;
      return `M ${ANCHOR_X} 0 Q ${controlX} ${controlY} ${endX} ${endY}`;
    }
  );

  const clipX = useTransform(x, (v) => ANCHOR_X + v);
  const clipY = useTransform(y, (v) => CARD_TOP + v);

  const handleDragEnd = () => {
    animate(x, 0, RETURN_SPRING);
    animate(y, 0, RETURN_SPRING);
  };

  const initials =
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("") || "ID";

  return (
    <div className={styles.overlay}>
      <svg
        className={styles.lanyard}
        viewBox="0 0 300 300"
        aria-hidden="true"
      >
        <motion.path d={pathD} className={styles.line} fill="none" />
        <motion.circle cx={clipX} cy={clipY} r={5} className={styles.clip} />
      </svg>

      <div className={styles.cardSlot}>
        <motion.div
          className={styles.card}
          style={{ x, y, opacity }}
          drag
          dragConstraints={DRAG_CONSTRAINTS}
          dragElastic={0.15}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
        >
          <div className={styles.meta}>
            <span>Open to Work</span>
            <span>2026</span>
          </div>

          <div className={styles.photo} aria-hidden="true">
            {photoUrl ? <img src={photoUrl} alt="" /> : <span>{initials}</span>}
          </div>

          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>

          <div className={styles.barcode}>
            <div className={styles.bars} />
            <span className={styles.barcodeLabel}>ID • +593-999-298-135</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}