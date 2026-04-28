"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter, routing } from "@/i18n/routing";
import styles from "./LangSwitch.module.css";

export function LangSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const switchTo = (target: (typeof routing.locales)[number]) => {
    if (target === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: target });
    });
  };

  return (
    <div className={styles.wrap}>
      {routing.locales.map((l) => (
        <button
          key={l}
          className={`${styles.btn} ${l === locale ? styles.active : ""}`}
          onClick={() => switchTo(l)}
          aria-label={`Switch to ${l.toUpperCase()}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
