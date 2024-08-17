"use client"
import { useTranslations } from "next-intl";
import FailedMessage from "./components/FailedMessage";
import Footer from "./components/Footer";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main>
  
      <Footer />
    </main>
  )
}
