import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import styles from "./Footer.module.css";

export function Footer() {
  const t = useTranslations("footer");
  const links1 = t.raw("links1") as string[];
  const links2 = t.raw("links2") as string[];
  const links3 = t.raw("links3") as string[];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              alm<span>.</span>
            </div>
            <p className={styles.tagline}>{t("tagline")}</p>
            <div
              className={styles.address}
              dangerouslySetInnerHTML={{ __html: t.raw("address") }}
            />
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>{t("col1")}</div>
            <ul>
              {links1.map((link) => (
                <li key={link}>
                  <Link href="/#industries">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>{t("col2")}</div>
            <ul>
              {links2.map((link) => (
                <li key={link}>
                  <Link href="/#work">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>{t("col3")}</div>
            <ul>
              {links3.map((link) => (
                <li key={link}>
                  <Link href="/#about">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>{t("legal")}</div>
          <div className={styles.legalLinks}>
            <Link href="/imprint">{t("imprint")}</Link>
            <Link href="/privacy">{t("privacy")}</Link>
            <Link href="/terms">{t("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
