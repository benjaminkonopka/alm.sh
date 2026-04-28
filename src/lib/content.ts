import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

export type CaseFrontmatter = {
  slug: string;
  client: string;
  client_full?: string;
  industry?: string;
  period?: string;
  status?: string;
  positioning_pillar?: "multi-tenant" | "ai-in-production" | "senior-sparring";
  disciplines?: string[];
  featured_homepage?: boolean;
  visibility?: "published" | "logo-only";
  url?: string;
  hero_image?: string;
  logo?: string;
  metrics?: { label: string; value: string }[];
  stack?: string[];
  team_alm?: string[];
  teaser_label?: string;
  teaser_headline?: string;
  teaser_body?: string;
};

export type Case = {
  frontmatter: CaseFrontmatter;
  body: string;
};

export type Section = {
  frontmatter: Record<string, unknown>;
  body: string;
};

function readMarkdown(absolutePath: string) {
  const raw = fs.readFileSync(absolutePath, "utf8");
  const parsed = matter(raw);
  return { frontmatter: parsed.data, body: parsed.content };
}

const FALLBACK_LOCALE = "de";

function resolveLocaleFile(dir: string, slug: string, locale: string): string {
  const preferred = path.join(dir, `${slug}.${locale}.md`);
  if (fs.existsSync(preferred)) return preferred;
  const fallback = path.join(dir, `${slug}.${FALLBACK_LOCALE}.md`);
  return fallback;
}

export function getSection(slug: string, locale: string): Section {
  const filePath = resolveLocaleFile(path.join(CONTENT_ROOT, "sections"), slug, locale);
  const { frontmatter, body } = readMarkdown(filePath);
  return { frontmatter, body };
}

export function getAllCases(locale: string): Case[] {
  const dir = path.join(CONTENT_ROOT, "cases");
  const slugs = new Set<string>();
  for (const file of fs.readdirSync(dir)) {
    const match = file.match(/^(.+)\.[a-z]{2}\.md$/);
    if (match) slugs.add(match[1]);
  }

  return Array.from(slugs).map((slug) => {
    const filePath = resolveLocaleFile(dir, slug, locale);
    const { frontmatter, body } = readMarkdown(filePath);
    return { frontmatter: frontmatter as CaseFrontmatter, body };
  });
}

export function getFeaturedCases(locale: string): Case[] {
  return getAllCases(locale)
    .filter((c) => c.frontmatter.featured_homepage === true)
    .filter((c) => c.frontmatter.visibility !== "logo-only");
}

export function getCase(slug: string, locale: string): Case | null {
  const filePath = resolveLocaleFile(path.join(CONTENT_ROOT, "cases"), slug, locale);
  if (!fs.existsSync(filePath)) return null;
  const { frontmatter, body } = readMarkdown(filePath);
  return { frontmatter: frontmatter as CaseFrontmatter, body };
}

export type EngagementFrontmatter = {
  slug: string;
  type: "hackathon" | "sponsoring" | "oss" | "talk";
  title: string;
  subtitle?: string;
  event?: string;
  date?: string;
  period_label?: string;
  partner?: string;
  result?: string;
  featured_homepage?: boolean;
  visibility?: "published" | "logo-only";
  prototype_url?: string;
  code_url?: string;
  external_url?: string;
  tags?: string[];
  team_alm?: string[];
  team_partner?: string[];
  teaser_headline?: string;
  teaser_body?: string;
};

export type EngagementItem = {
  frontmatter: EngagementFrontmatter;
  body: string;
};

export function getAllEngagement(locale: string): EngagementItem[] {
  const dir = path.join(CONTENT_ROOT, "engagement");
  if (!fs.existsSync(dir)) return [];
  const slugs = new Set<string>();
  for (const file of fs.readdirSync(dir)) {
    const match = file.match(/^(.+)\.[a-z]{2}\.md$/);
    if (match) slugs.add(match[1]);
  }

  return Array.from(slugs).map((slug) => {
    const filePath = resolveLocaleFile(dir, slug, locale);
    const { frontmatter, body } = readMarkdown(filePath);
    return { frontmatter: frontmatter as EngagementFrontmatter, body };
  });
}

export function getFeaturedEngagement(locale: string): EngagementItem[] {
  return getAllEngagement(locale)
    .filter((e) => e.frontmatter.featured_homepage === true)
    .filter((e) => e.frontmatter.visibility !== "logo-only");
}

export function getEngagementItem(slug: string, locale: string): EngagementItem | null {
  const filePath = resolveLocaleFile(path.join(CONTENT_ROOT, "engagement"), slug, locale);
  if (!fs.existsSync(filePath)) return null;
  const { frontmatter, body } = readMarkdown(filePath);
  return { frontmatter: frontmatter as EngagementFrontmatter, body };
}
