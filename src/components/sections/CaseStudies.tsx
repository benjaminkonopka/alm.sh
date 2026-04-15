import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import styles from "./CaseStudies.module.css";

const CASES = [
  {
    key: "c1",
    image: "/assets/cases/bmw.webp",
    alt: "BMW automotive platform UI",
    label: "Automotive · Mobility",
    metrics: [
      { val: "2.4M+", labelKey: "m1l" },
      { val: "−73%", labelKey: "m2l" },
      { val: "8", labelKey: "m3l" },
    ],
  },
  {
    key: "c2",
    image: "/assets/cases/p7s1.webp",
    alt: "ProSiebenSat.1 streaming platform",
    label: "Media · Entertainment",
    metrics: [
      { val: "12M+", labelKey: "m1l" },
      { val: "99.97%", labelKey: "m2l" },
      { val: "5", labelKey: "m3l" },
    ],
  },
  {
    key: "c3",
    image: "/assets/cases/roche.webp",
    alt: "Roche clinical data platform",
    label: "Pharma · Life Sciences",
    metrics: [
      { val: "4,000+", labelKey: "m1l" },
      { val: "EU MDR", labelKey: "m2l" },
      { val: "−52%", labelKey: "m3l" },
    ],
  },
] as const;

export function CaseStudies() {
  const t = useTranslations("cases");

  return (
    <section className={styles.cases} id="work">
      <div className="container">
        <div className={`${styles.header} section-header reveal`}>
          <h2 className="section-title">{t("title")}</h2>
        </div>
      </div>

      {CASES.map((c) => (
        <div key={c.key} className={`${styles.item} reveal`}>
          <div className={styles.content}>
            <div className={styles.number}>{t(`${c.key}.num`)}</div>
            <div className={styles.client}>{t(`${c.key}.client`)}</div>
            <h3 className={styles.headline}>{t(`${c.key}.headline`)}</h3>
            <p className={styles.body}>{t(`${c.key}.body`)}</p>
            <div className={styles.metrics}>
              {c.metrics.map((m, i) => (
                <div key={i}>
                  <div className={styles.metricVal}>{m.val}</div>
                  <div className={styles.metricLabel}>{t(`${c.key}.${m.labelKey}`)}</div>
                </div>
              ))}
            </div>
            <Link href="/#work" className={styles.link}>
              {t(`${c.key}.link`)} <span className="arrow">→</span>
            </Link>
          </div>
          <div className={styles.visual}>
            <Image
              src={c.image}
              alt={c.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className={styles.visualLabel}>{c.label}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
