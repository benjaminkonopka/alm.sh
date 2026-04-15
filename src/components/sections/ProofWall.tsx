import { useTranslations } from "next-intl";
import styles from "./ProofWall.module.css";

const CLIENTS = ["ProSiebenSat.1", "Roche", "BMW", "MediaMarkt", "Allianz", "Scout24"];
const STATS = [
  { num: "12+", key: "stat1" },
  { num: "240+", key: "stat2" },
  { num: "18", key: "stat3" },
  { num: "45", key: "stat4" },
] as const;

export function ProofWall() {
  const t = useTranslations("proof");

  return (
    <section className={styles.proof}>
      <div className="container">
        <div className={`${styles.kicker} reveal`}>
          <span className="label">{t("kicker")}</span>
        </div>
        <div className={`${styles.logos} reveal reveal-delay-1`}>
          {CLIENTS.map((c) => (
            <div key={c} className={styles.logo}>
              {c}
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.stats} reveal`}>
        {STATS.map((s) => (
          <div key={s.key} className={styles.stat}>
            <div className={styles.statNumber}>{s.num}</div>
            <div
              className={styles.statLabel}
              dangerouslySetInnerHTML={{ __html: t.raw(s.key) }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
