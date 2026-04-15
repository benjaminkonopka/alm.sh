"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";
import styles from "./LangSwitch.module.css";

export function LangSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [, startTransition] = useTransition();

  const switchTo = (target: string) => {
    if (target === locale) return;
    startTransition(() => {
      router.replace(
        // @ts-expect-error — dynamic params forwarded as-is
        { pathname, params },
        { locale: target as (typeof routing.locales)[number] }
      );
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
