"use client"
import { useTranslations } from "next-intl";
import Footer from "./components/Footer";

export default function Home() {
  const t = useTranslations("Home");
  
  return (
    <main>
      <Footer />
    </main>
  )
}
