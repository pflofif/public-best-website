"use client"
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  let y = 7;
  return (
    <main>
      <p>{t('Home.Hi')}</p>
    </main>
  )
}
