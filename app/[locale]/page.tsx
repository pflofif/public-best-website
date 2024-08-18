"use client"
import { useTranslations } from "next-intl";
import Timeline from './components/Timeline'

export default function Home() {
  const t = useTranslations("Home");
  
  return (
    <main>
      <p>{t('Hi')}</p>
      <Timeline/>
    </main>
  )
}
