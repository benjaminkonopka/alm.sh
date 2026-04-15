import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import styles from "./Hero.module.css";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className="reveal">
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowLine} />
            <span>{t("eyebrow")}</span>
          </div>
        </div>
        <h1
          className={`${styles.headline} reveal reveal-delay-1`}
          dangerouslySetInnerHTML={{ __html: t.raw("headline") }}
        />
        <p className={`${styles.subline} reveal reveal-delay-2`}>
          {t("subline")}
        </p>
        <div className={`${styles.actions} reveal reveal-delay-3`}>
          <Link href="/#work" className={styles.btnPrimary}>
            {t("cta1")} <span className="arrow">→</span>
          </Link>
          <Link href="/#about" className={styles.btnGhost}>
            {t("cta2")} <span className="arrow">→</span>
          </Link>
        </div>
        <div className={`${styles.meta} reveal reveal-delay-4`}>
          <span className={styles.metaItem}>{t("meta1")}</span>
          <div className={styles.metaDot} />
          <span className={styles.metaItem}>{t("meta2")}</span>
          <div className={styles.metaDot} />
          <span className={styles.metaItem}>{t("meta3")}</span>
          <div className={styles.metaDot} />
          <span className={styles.metaItem}>{t("meta4")}</span>
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

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>{t("scroll")}</span>
      </div>
    </section>
  );
}
