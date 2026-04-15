import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import styles from "./Industries.module.css";

const KEYS = ["i1", "i2", "i3", "i4", "i5", "i6"] as const;

export function Industries() {
  const t = useTranslations("industries");

  return (
    <section className={styles.industries} id="industries">
      <div className="container">
        <div className={`${styles.header} section-header reveal`}>
          <h2 className="section-title">{t("title")}</h2>
          <Link href="/#industries" className="reveal">
            <span className="label">
              {t("link")} <span className="arrow">→</span>
            </span>
          </Link>
        </div>
      </div>
      <div className={`${styles.grid} reveal`}>
        {KEYS.map((k, i) => (
          <div
            key={k}
            className={`${styles.card} ${i === 0 ? styles.featured : ""}`}
          >
            <div>
              <h3
                className={styles.name}
                dangerouslySetInnerHTML={{ __html: t.raw(`${k}.name`) }}
              />
              <p className={styles.desc}>{t(`${k}.desc`)}</p>
            </div>
            <div className={styles.client}>{t(`${k}.client`)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
