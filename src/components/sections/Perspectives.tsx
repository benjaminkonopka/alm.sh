import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import styles from "./Perspectives.module.css";

const KEYS = ["p1", "p2", "p3"] as const;

export function Perspectives() {
  const t = useTranslations("perspectives");

  return (
    <section className={styles.perspectives}>
      <div className="container">
        <div className={`${styles.header} section-header reveal`}>
          <h2 className="section-title">{t("title")}</h2>
          <Link href="/blog">
            <span className="label">
              {t("link")} <span className="arrow">→</span>
            </span>
          </Link>
        </div>
      </div>
      <div className={`${styles.grid} reveal`}>
        {KEYS.map((k) => (
          <Link key={k} href="/blog" className={styles.card}>
            <div>
              <div className={styles.tag}>{t(`${k}.tag`)}</div>
              <h3 className={styles.title}>{t(`${k}.title`)}</h3>
            </div>
            <div className={styles.date}>{t(`${k}.date`)}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
