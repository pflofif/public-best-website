"use client"
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main>
      <p className="text-best-blue">{t('Hi')}</p>
    </main>
  )
}
