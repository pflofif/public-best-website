"use client"
import { useTranslations } from "next-intl";
import FailedMessage from "./components/FailedMessage";
import OurPartners from "./components/OurPartners";
import Footer from "./components/Footer";
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main>
      <Header />
      <div className="relative">
        <OurPartners />
        <Image
          src="/Partners_bg.svg"
          layout="fill"
          objectFit="cover"
          className="w-full h-full -z-20 opacity-90"
          alt=""
        />
      </div>
      <Footer />
    </main>
  )
}
