import { Link } from "@/i18n/routing";
import { getSection } from "@/lib/content";
import styles from "./Hero.module.css";

type HeroFrontmatter = {
  eyebrow?: string;
  headline?: string;
  subline?: string;
  scroll?: string;
  ctas?: { label: string; href: string; variant?: "primary" | "secondary" }[];
  meta?: string[];
};

type Props = { locale: string };

export function Hero({ locale }: Props) {
  const { frontmatter } = getSection("hero", locale);
  const fm = frontmatter as HeroFrontmatter;

  const ctas = fm.ctas ?? [];
  const meta = fm.meta ?? [];

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className="reveal">
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowLine} />
            <span>{fm.eyebrow}</span>
          </div>
        </div>
        <h1 className={`${styles.headline} reveal reveal-delay-1`}>
          {fm.headline?.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className={`${styles.subline} reveal reveal-delay-2`}>{fm.subline}</p>
        <div className={`${styles.actions} reveal reveal-delay-3`}>
          {ctas.map((cta, i) => (
            <Link
              key={i}
              href={cta.href}
              className={cta.variant === "primary" ? styles.btnPrimary : styles.btnGhost}
            >
              {cta.label} <span className="arrow">→</span>
            </Link>
          ))}
        </div>
        <div className={`${styles.meta} reveal reveal-delay-4`}>
          {meta.map((item, i) => (
            <span key={i} style={{ display: "contents" }}>
              <span className={styles.metaItem}>{item}</span>
              {i < meta.length - 1 && <div className={styles.metaDot} />}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <video
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero/hero-poster.jpg"
        >
          <source src="/assets/hero/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {fm.scroll && (
        <div className={styles.scroll}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>{fm.scroll}</span>
        </div>
      )}
    </section>
  );
}
