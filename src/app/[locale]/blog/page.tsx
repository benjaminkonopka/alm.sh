import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ARTICLES } from "@/content/articles";
import styles from "@/components/blog/BlogList.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: "Perspectives",
    description: t("desc"),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: "en" | "de" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  return (
    <>
      <section className={styles.blogHero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div>
              <div className={styles.eyebrow}>
                <span className="label">{t("eyebrow")}</span>
              </div>
              <h1
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: t.raw("title") as string }}
              />
            </div>
            <div>
              <p className={styles.desc}>{t("desc")}</p>
              <div className={styles.counts}>
                <div className={styles.count}>
                  <div className={styles.countNum}>{ARTICLES.length}</div>
                  <div className={styles.countLabel}>{t("countL1")}</div>
                </div>
                <div className={styles.count}>
                  <div className={styles.countNum}>3</div>
                  <div className={styles.countLabel}>{t("countL2")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.list}>
          {ARTICLES.map((a) => {
            const catLabel =
              a.category === "ai"
                ? t("filterAI")
                : a.category === "compliance"
                ? t("filterCompliance")
                : t("filterInfra");

            return (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className={styles.card}
              >
                <div>
                  <div className={styles.tag}>
                    <div className={`${styles.tagDot} ${styles[a.category]}`} />
                    <span>{catLabel}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{a.title[locale]}</h3>
                  <p className={styles.excerpt}>{a.excerpt[locale]}</p>
                </div>
                <div className={styles.meta}>
                  {a.date} · {a.readTime} · {a.author}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
