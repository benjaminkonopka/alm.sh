"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LangSwitch } from "./LangSwitch";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Nav.module.css";

export function Nav() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            alm<span>.</span>
          </Link>
          <ul className={styles.links}>
            <li><Link href="/#work">{t("work")}</Link></li>
            <li><Link href="/#industries">{t("industries")}</Link></li>
            <li><Link href="/blog">{t("perspectives")}</Link></li>
            <li><Link href="/#about">{t("about")}</Link></li>
            <li><Link href="/#careers">{t("careers")}</Link></li>
          </ul>
          <div className={styles.actions}>
            <LangSwitch />
            <ThemeToggle />
            <Link href="/#contact" className={styles.cta}>
              {t("cta")} <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
