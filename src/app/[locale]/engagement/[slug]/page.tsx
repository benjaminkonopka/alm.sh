import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ReactMarkdown from "react-markdown";
import { Link } from "@/i18n/routing";
import { getAllEngagement, getEngagementItem } from "@/lib/content";
import styles from "./EngagementDetail.module.css";

type Params = Promise<{ locale: "en" | "de"; slug: string }>;

export function generateStaticParams() {
  const items = getAllEngagement("de").filter(
    (e) => e.frontmatter.visibility !== "logo-only",
  );
  return items.flatMap((e) => [
    { locale: "en", slug: e.frontmatter.slug },
    { locale: "de", slug: e.frontmatter.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getEngagementItem(slug, locale);
  if (!item) return {};
  return {
    title: `${item.frontmatter.title} — alm engineering`,
    description: item.frontmatter.teaser_body ?? item.frontmatter.subtitle ?? "",
  };
}

const TYPE_LABEL: Record<string, string> = {
  hackathon: "Hackathon",
  sponsoring: "Sponsoring",
  oss: "Open Source",
  talk: "Talk",
};

const TYPE_GRADIENT: Record<string, string> = {
  hackathon: "linear-gradient(135deg, #2a1810 0%, #160c08 60%, #3a2418 100%)",
  sponsoring: "linear-gradient(135deg, #102028 0%, #08121a 60%, #1a3340 100%)",
  oss: "linear-gradient(135deg, #1a2010 0%, #0c1208 60%, #2a3318 100%)",
  talk: "linear-gradient(135deg, #2a1428 0%, #160a14 60%, #3a1e38 100%)",
};

function clean(value?: unknown): string | undefined {
  if (value === undefined || value === null) return undefined;
  const s = String(value);
  if (s.startsWith("TODO_")) return undefined;
  return s;
}

export default async function EngagementPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = getEngagementItem(slug, locale);
  if (!item) notFound();
  if (item.frontmatter.visibility === "logo-only") notFound();

  const fm = item.frontmatter;
  const typeLabel = TYPE_LABEL[fm.type] ?? fm.type;
  const event = clean(fm.event);
  const date = clean(fm.date);
  const period = clean(fm.period_label);
  const partner = clean(fm.partner);
  const result = clean(fm.result);

  return (
    <article className={styles.wrap}>
      <Link href="/#engagement" className={styles.back}>
        ← Alle Aktivitäten
      </Link>

      <div
        className={styles.banner}
        style={{ background: TYPE_GRADIENT[fm.type] ?? "var(--bg-2)" }}
      >
        <div className={styles.bannerBadge}>{typeLabel}</div>
        {partner && <div className={styles.bannerPartner}>mit {partner}</div>}
        <div className={styles.bannerTitle}>{fm.title}</div>
        {fm.subtitle && <div className={styles.bannerSubtitle}>{fm.subtitle}</div>}
      </div>

      <div className={styles.eyebrow}>
        {event && <span>{event}</span>}
        {(date || period) && (
          <>
            <span className={styles.dot} />
            <span>{date ?? period}</span>
          </>
        )}
        {result && (
          <>
            <span className={styles.dot} />
            <span className={styles.result}>{result}</span>
          </>
        )}
      </div>

      {fm.teaser_headline && <p className={styles.deck}>{fm.teaser_headline}</p>}

      <div className={styles.actions}>
        {fm.prototype_url && (
          <a
            href={fm.prototype_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionPrimary}
          >
            Prototyp ansehen <span className="arrow">→</span>
          </a>
        )}
        {fm.external_url && (
          <a
            href={fm.external_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionPrimary}
          >
            Zur Veranstaltung <span className="arrow">→</span>
          </a>
        )}
        {fm.code_url && (
          <a
            href={fm.code_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionGhost}
          >
            Code ansehen <span className="arrow">→</span>
          </a>
        )}
      </div>

      <div className={styles.layout}>
        <div className={styles.body}>
          <ReactMarkdown>{item.body}</ReactMarkdown>
        </div>

        <aside className={styles.sidebar}>
          {Array.isArray(fm.team_alm) && fm.team_alm.length > 0 && (
            <div className={styles.sidebarBlock}>
              <div className={styles.sidebarLabel}>Team alm</div>
              <ul className={styles.sidebarList}>
                {fm.team_alm.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(fm.team_partner) && fm.team_partner.length > 0 && (
            <div className={styles.sidebarBlock}>
              <div className={styles.sidebarLabel}>Partner-Team</div>
              <ul className={styles.sidebarList}>
                {fm.team_partner.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(fm.tags) && fm.tags.length > 0 && (
            <div className={styles.sidebarBlock}>
              <div className={styles.sidebarLabel}>Themen</div>
              <ul className={styles.sidebarTags}>
                {fm.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <Link href="/#engagement" className={styles.back}>
        ← Alle Aktivitäten
      </Link>
    </article>
  );
}
