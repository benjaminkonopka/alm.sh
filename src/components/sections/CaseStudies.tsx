import { Link } from "@/i18n/routing";
import { getFeaturedCases, getSection } from "@/lib/content";
import styles from "./CaseStudies.module.css";

type Props = { locale: string };

type SectionFm = {
  title?: string;
  link_label?: string;
  link_href?: string;
  case_link_label?: string;
};

const PILLAR_LABEL: Record<string, string> = {
  "multi-tenant": "Multi-Mandanten · Plattform",
  "ai-in-production": "KI in Produktion",
  "senior-sparring": "Senior-Sparring",
};

export function CaseStudies({ locale }: Props) {
  const section = getSection("cases", locale);
  const fm = section.frontmatter as SectionFm;
  const cases = getFeaturedCases(locale);
  const total = cases.length.toString().padStart(2, "0");

  return (
    <section className={styles.cases} id="work">
      <div className="container">
        <div className={`${styles.header} section-header reveal`}>
          <h2 className="section-title">{fm.title ?? "Ausgewählte Projekte."}</h2>
        </div>
      </div>

      {cases.map((c, i) => {
        const num = (i + 1).toString().padStart(2, "0");
        const metrics = Array.isArray(c.frontmatter.metrics) ? c.frontmatter.metrics : [];
        const visualLabel =
          PILLAR_LABEL[c.frontmatter.positioning_pillar ?? ""] ??
          c.frontmatter.industry ??
          "";
        return (
          <div key={c.frontmatter.slug} className={`${styles.item} reveal`}>
            <div className={styles.content}>
              <div className={styles.number}>{`${num} / ${total}`}</div>
              <div className={styles.client}>
                {c.frontmatter.teaser_label ?? c.frontmatter.client_full ?? c.frontmatter.client}
              </div>
              <h3 className={styles.headline}>
                {c.frontmatter.teaser_headline ?? c.frontmatter.client}
              </h3>
              <p className={styles.body}>{c.frontmatter.teaser_body ?? ""}</p>
              {metrics.length > 0 && (
                <div className={styles.metrics}>
                  {metrics.slice(0, 3).map((m, idx) => (
                    <div key={idx}>
                      <div className={styles.metricVal}>{m.value}</div>
                      <div className={styles.metricLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <Link href={`/cases/${c.frontmatter.slug}`} className={styles.link}>
                {fm.case_link_label ?? "Case Study lesen"} <span className="arrow">→</span>
              </Link>
            </div>
            <div
              className={styles.visual}
              style={{
                background: pillarGradient(c.frontmatter.positioning_pillar),
              }}
            >
              <div className={styles.visualLabel}>{visualLabel}</div>
            </div>
          </div>
        );
      })}

      {fm.link_label && fm.link_href && (
        <div className="container">
          <div className={`${styles.footer} reveal`}>
            <Link href={fm.link_href} className={styles.allLink}>
              {fm.link_label} <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

function pillarGradient(pillar?: string) {
  switch (pillar) {
    case "multi-tenant":
      return "linear-gradient(135deg, #1a2433 0%, #0d1421 60%, #1c2740 100%)";
    case "ai-in-production":
      return "linear-gradient(135deg, #2a1f3d 0%, #16101f 60%, #3d2858 100%)";
    case "senior-sparring":
      return "linear-gradient(135deg, #1f2a25 0%, #10171a 60%, #2a3a36 100%)";
    default:
      return "var(--bg-2)";
  }
}
