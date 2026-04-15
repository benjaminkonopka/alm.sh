import { useTranslations } from "next-intl";
import styles from "./About.module.css";

const STATS = [
  { num: "2013", key: "s1" },
  { num: "45", key: "s2" },
  { num: "240+", key: "s3" },
  { num: "18", key: "s4" },
] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={`${styles.inner} reveal`}>
          <div>
            <h2
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            />
          </div>
          <div>
            <p className={styles.body}>{t("body")}</p>
            <div className={styles.badge}>{t("badge")}</div>
          </div>
        </div>
      </div>
      <div className={`${styles.stats} reveal`}>
        {STATS.map((s) => (
          <div key={s.key} className={styles.stat}>
            <div className={styles.statNum}>{s.num}</div>
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
