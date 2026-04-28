import { Link } from "@/i18n/routing";
import { getFeaturedEngagement, getSection } from "@/lib/content";
import styles from "./Engagement.module.css";

type Props = { locale: string };

type SectionFm = {
  title?: string;
  subtitle?: string;
  link_label?: string;
  link_href?: string;
  item_label_hackathon?: string;
  item_label_sponsoring?: string;
  item_label_oss?: string;
  item_label_talk?: string;
  prototype_label?: string;
  code_label?: string;
  external_label?: string;
  detail_label?: string;
};

const TYPE_GRADIENT: Record<string, string> = {
  hackathon: "linear-gradient(135deg, #2a1810 0%, #160c08 60%, #3a2418 100%)",
  sponsoring: "linear-gradient(135deg, #102028 0%, #08121a 60%, #1a3340 100%)",
  oss: "linear-gradient(135deg, #1a2010 0%, #0c1208 60%, #2a3318 100%)",
  talk: "linear-gradient(135deg, #2a1428 0%, #160a14 60%, #3a1e38 100%)",
};

export function Engagement({ locale }: Props) {
  const section = getSection("engagement", locale);
  const fm = section.frontmatter as SectionFm;
  const items = getFeaturedEngagement(locale);

  if (items.length === 0) return null;

  const typeLabel = (type: string) => {
    switch (type) {
      case "hackathon":
        return fm.item_label_hackathon ?? "Hackathon";
      case "sponsoring":
        return fm.item_label_sponsoring ?? "Sponsoring";
      case "oss":
        return fm.item_label_oss ?? "Open Source";
      case "talk":
        return fm.item_label_talk ?? "Talk";
      default:
        return type;
    }
  };

  return (
    <section className={styles.engagement} id="engagement">
      <div className="container">
        <div className={`${styles.header} section-header reveal`}>
          <h2 className="section-title">{fm.title ?? "Über die Mandate hinaus."}</h2>
          {fm.subtitle && <p className={styles.subtitle}>{fm.subtitle}</p>}
        </div>

        <div className={styles.grid}>
          {items.map((item) => {
            const type = item.frontmatter.type;
            return (
              <article key={item.frontmatter.slug} className={`${styles.card} reveal`}>
                <div
                  className={styles.visual}
                  style={{ background: TYPE_GRADIENT[type] ?? "var(--bg-2)" }}
                >
                  <div className={styles.visualBadge}>{typeLabel(type)}</div>
                  {item.frontmatter.partner && (
                    <div className={styles.visualPartner}>
                      mit {item.frontmatter.partner}
                    </div>
                  )}
                  <div className={styles.visualTitle}>{item.frontmatter.title}</div>
                </div>

                <div className={styles.body}>
                  <div className={styles.meta}>
                    {item.frontmatter.event && <span>{item.frontmatter.event}</span>}
                    {item.frontmatter.period_label && (
                      <>
                        <span className={styles.dot} />
                        <span>{item.frontmatter.period_label}</span>
                      </>
                    )}
                    {item.frontmatter.result && (
                      <>
                        <span className={styles.dot} />
                        <span className={styles.result}>{item.frontmatter.result}</span>
                      </>
                    )}
                  </div>

                  {item.frontmatter.teaser_headline && (
                    <h3 className={styles.headline}>{item.frontmatter.teaser_headline}</h3>
                  )}

                  {item.frontmatter.teaser_body && (
                    <p className={styles.text}>{item.frontmatter.teaser_body}</p>
                  )}

                  <div className={styles.actions}>
                    <Link
                      href={`/engagement/${item.frontmatter.slug}`}
                      className={styles.actionPrimary}
                    >
                      {fm.detail_label ?? "Details lesen"}{" "}
                      <span className="arrow">→</span>
                    </Link>
                    {item.frontmatter.prototype_url && (
                      <a
                        href={item.frontmatter.prototype_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionGhost}
                      >
                        {fm.prototype_label ?? "Prototyp"}{" "}
                        <span className="arrow">→</span>
                      </a>
                    )}
                    {item.frontmatter.external_url && (
                      <a
                        href={item.frontmatter.external_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionGhost}
                      >
                        {fm.external_label ?? "Veranstaltung"}{" "}
                        <span className="arrow">→</span>
                      </a>
                    )}
                    {item.frontmatter.code_url && (
                      <a
                        href={item.frontmatter.code_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionGhost}
                      >
                        {fm.code_label ?? "Code"} <span className="arrow">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
