import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { getAllCases } from "@/lib/content";
import styles from "./Cases.module.css";

type Params = Promise<{ locale: "en" | "de" }>;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export const metadata: Metadata = {
  title: "Projekte — alm engineering",
  description:
    "Was alm engineering mit Konzernen, Mittelstand und Startups in DACH gebaut hat.",
};

const PILLAR_LABEL: Record<string, string> = {
  "multi-tenant": "Multi-Mandanten",
  "ai-in-production": "KI in Produktion",
  "senior-sparring": "Senior-Sparring",
};

function clean(value?: unknown): string | undefined {
  if (value === undefined || value === null) return undefined;
  const s = String(value);
  if (s.startsWith("TODO_")) return undefined;
  return s;
}

export default async function CasesListPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const allCases = getAllCases(locale).filter(
    (c) => c.frontmatter.visibility !== "logo-only",
  );

  const sorted = [...allCases].sort((a, b) => {
    const af = a.frontmatter.featured_homepage === true ? 0 : 1;
    const bf = b.frontmatter.featured_homepage === true ? 0 : 1;
    if (af !== bf) return af - bf;
    return (a.frontmatter.client ?? "").localeCompare(b.frontmatter.client ?? "");
  });

  return (
    <article className={styles.wrap}>
      <Link href="/" className={styles.back}>
        ← Zurück zur Startseite
      </Link>

      <header className={styles.header}>
        <div className={styles.eyebrow}>
          <div className={styles.eyebrowLine} />
          <span>Alle Projekte</span>
        </div>
        <h1 className={styles.title}>Projekte.</h1>
        <p className={styles.subtitle}>
          Was wir mit Konzernen, Mittelstand und Startups in DACH gebaut haben — von
          Multi-Mandanten-Plattformen über produktive KI bis Architektur-Sparring.
        </p>
        <div className={styles.count}>{sorted.length} Projekte</div>
      </header>

      <div className={styles.grid}>
        {sorted.map((c) => {
          const fm = c.frontmatter;
          const pillarLabel = fm.positioning_pillar
            ? PILLAR_LABEL[fm.positioning_pillar]
            : null;
          const period = clean(fm.period);
          const industry = clean(fm.industry);
          return (
            <Link
              key={fm.slug}
              href={`/cases/${fm.slug}`}
              className={styles.card}
            >
              <div className={styles.cardEyebrow}>
                {industry && <span>{industry}</span>}
                {pillarLabel && (
                  <>
                    <span className={styles.dot} />
                    <span>{pillarLabel}</span>
                  </>
                )}
              </div>
              <h2 className={styles.cardTitle}>
                {fm.client_full ?? fm.client}
              </h2>
              {fm.teaser_headline && (
                <p className={styles.cardTeaser}>{fm.teaser_headline}</p>
              )}
              <div className={styles.cardFooter}>
                {period && <span className={styles.cardPeriod}>{period}</span>}
                <span className={styles.cardArrow}>→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </article>
  );
}
