import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import styles from "./Careers.module.css";

const KEYS = ["r1", "r2", "r3", "r4"] as const;

export function Careers() {
  const t = useTranslations("careers");

  return (
    <section className={styles.careers} id="careers">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p
            className={styles.sub}
            dangerouslySetInnerHTML={{ __html: t.raw("sub") }}
          />
        </div>
        <div className={`${styles.list} reveal`}>
          {KEYS.map((k) => (
            <Link key={k} href="/#careers" className={styles.row}>
              <div className={styles.name}>{t(`${k}.name`)}</div>
              <div className={styles.meta}>{t(`${k}.meta`)}</div>
              <div className={styles.tag}>{t(`${k}.tag`)}</div>
              <div className={styles.arrow}>
                <svg
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </Link>
          ))}
          <Link href="/#careers" className={styles.allRoles}>
            {t("allRoles")} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
