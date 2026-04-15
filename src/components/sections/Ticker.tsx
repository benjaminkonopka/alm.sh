import styles from "./Ticker.module.css";

const WORDS = [
  "Engineering",
  "European Enterprises",
  "Digital Products",
  "AI Systems",
  "Independent",
  "Munich-Born",
  "Mission-Critical Software",
  "Enterprise-Grade",
];

export function Ticker() {
  const row = (
    <div className={styles.item}>
      {WORDS.map((w, i) => (
        <span key={`${w}-${i}`} style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {w}
          <span className={styles.dot} />
        </span>
      ))}
    </div>
  );

  return (
    <div className={styles.ticker}>
      <div className={styles.inner}>
        {row}
        {row}
      </div>
    </div>
  );
}
