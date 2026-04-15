import { useTranslations } from "next-intl";
import styles from "./Capabilities.module.css";

const KEYS = ["c1", "c2", "c3", "c4"] as const;

export function Capabilities() {
  const t = useTranslations("capabilities");

  return (
    <section className={styles.capabilities}>
      <div className="container">
        <div className={`${styles.header} section-header reveal`}>
          <h2 className="section-title">{t("title")}</h2>
        </div>
      </div>
      <div className={`${styles.grid} reveal`}>
        {KEYS.map((k, i) => (
          <div key={k} className={styles.card}>
            <div className={styles.num}>
              {String(i + 1).padStart(2, "0")} / 04
            </div>
            <h3
              className={styles.name}
              dangerouslySetInnerHTML={{ __html: t.raw(`${k}.name`) }}
            />
            <p className={styles.desc}>{t(`${k}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
