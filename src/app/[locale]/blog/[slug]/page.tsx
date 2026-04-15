import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ARTICLES, getArticle } from "@/content/articles";
import styles from "@/components/blog/Article.module.css";

type Params = Promise<{ locale: "en" | "de"; slug: string }>;

export function generateStaticParams() {
  return ARTICLES.flatMap((a) => [
    { locale: "en", slug: a.slug },
    { locale: "de", slug: a.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title[locale],
    description: article.excerpt[locale],
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getArticle(slug);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "article" });
  const blogT = await getTranslations({ locale, namespace: "blog" });
  const catLabel =
    article.category === "ai"
      ? blogT("filterAI")
      : article.category === "compliance"
      ? blogT("filterCompliance")
      : blogT("filterInfra");

  // Dynamically import the MDX content per locale
  const { default: Content } = await import(
    `@/content/blog/${slug}/${locale}.mdx`
  ).catch(async () => import(`@/content/blog/${slug}/en.mdx`));

  const initials = article.author
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <article className={styles.wrap}>
      <Link href="/blog" className={styles.back}>
        {t("back")}
      </Link>

      <div className={styles.tag}>
        <div className={`${styles.tagDot} ${styles[article.category]}`} />
        <span className={styles.tagText}>{catLabel}</span>
      </div>

      <h1 className={styles.title}>{article.title[locale]}</h1>
      <p className={styles.deck}>{article.excerpt[locale]}</p>

      <div className={styles.byline}>
        <div className={styles.bylineAuthor}>
          <div className={styles.avatar}>{initials}</div>
          <div>
            <div className={styles.name}>{article.author}</div>
          </div>
        </div>
        <div className={styles.meta}>
          {article.date} · {article.readTime}
        </div>
      </div>

      <div className={styles.body}>
        <Content />
      </div>
    </article>
  );
}
