import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ReactMarkdown from "react-markdown";
import { Link } from "@/i18n/routing";
import { getAllCases, getCase } from "@/lib/content";
import styles from "./CaseDetail.module.css";

type Params = Promise<{ locale: "en" | "de"; slug: string }>;

export function generateStaticParams() {
  const cases = getAllCases("de").filter(
    (c) => c.frontmatter.visibility !== "logo-only",
  );
  return cases.flatMap((c) => [
    { locale: "en", slug: c.frontmatter.slug },
    { locale: "de", slug: c.frontmatter.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const c = getCase(slug, locale);
  if (!c) return {};
  return {
    title: `${c.frontmatter.client_full ?? c.frontmatter.client} — alm engineering`,
    description: c.frontmatter.teaser_body ?? c.frontmatter.teaser_headline ?? "",
  };
}

const PILLAR_LABEL: Record<string, string> = {
  "multi-tenant": "Multi-Mandanten · Plattform",
  "ai-in-production": "KI in Produktion",
  "senior-sparring": "Senior-Sparring",
};

function stripTodos(body: string): string {
  return body
    .split("\n")
    .filter((line) => !line.trim().toLowerCase().startsWith("todo benjamin"))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");
}

function clean(value?: unknown): string | undefined {
  if (value === undefined || value === null) return undefined;
  const s = String(value);
  if (s.startsWith("TODO_")) return undefined;
  return s;
}

export default async function CasePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const c = getCase(slug, locale);
  if (!c) notFound();
  if (c.frontmatter.visibility === "logo-only") notFound();

  const body = stripTodos(c.body);
  const pillarLabel = c.frontmatter.positioning_pillar
    ? PILLAR_LABEL[c.frontmatter.positioning_pillar]
    : null;
  const period = clean(c.frontmatter.period);
  const status = clean(c.frontmatter.status);
  const industry = clean(c.frontmatter.industry);

  return (
    <article className={styles.wrap}>
      <Link href="/#work" className={styles.back}>
        ← Alle Projekte
      </Link>

      <div className={styles.eyebrow}>
        {industry && <span>{industry}</span>}
        {period && (
          <>
            <span className={styles.dot} />
            <span>{period}</span>
          </>
        )}
        {pillarLabel && (
          <>
            <span className={styles.dot} />
            <span>{pillarLabel}</span>
          </>
        )}
      </div>

      <h1 className={styles.title}>
        {c.frontmatter.client_full ?? c.frontmatter.client}
      </h1>

      {c.frontmatter.teaser_headline && (
        <p className={styles.deck}>{c.frontmatter.teaser_headline}</p>
      )}

      {status && <div className={styles.status}>{status}</div>}

      {c.frontmatter.metrics && c.frontmatter.metrics.length > 0 && (
        <div className={styles.metrics}>
          {c.frontmatter.metrics.map((m, i) => (
            <div key={i} className={styles.metric}>
              <div className={styles.metricVal}>{m.value}</div>
              <div className={styles.metricLabel}>{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.layout}>
        <div className={styles.body}>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>

        <aside className={styles.sidebar}>
          {Array.isArray(c.frontmatter.team_alm) && c.frontmatter.team_alm.length > 0 && (
            <div className={styles.sidebarBlock}>
              <div className={styles.sidebarLabel}>Team</div>
              <ul className={styles.sidebarList}>
                {c.frontmatter.team_alm.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(c.frontmatter.disciplines) && c.frontmatter.disciplines.length > 0 && (
            <div className={styles.sidebarBlock}>
              <div className={styles.sidebarLabel}>Disziplinen</div>
              <ul className={styles.sidebarList}>
                {c.frontmatter.disciplines.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(c.frontmatter.stack) && c.frontmatter.stack.length > 0 && (
            <div className={styles.sidebarBlock}>
              <div className={styles.sidebarLabel}>Stack</div>
              <ul className={styles.sidebarTags}>
                {c.frontmatter.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          {c.frontmatter.url && (
            <div className={styles.sidebarBlock}>
              <a
                href={c.frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                Zur Plattform →
              </a>
            </div>
          )}
        </aside>
      </div>

      <Link href="/#work" className={styles.back}>
        ← Alle Projekte
      </Link>
    </article>
  );
}
