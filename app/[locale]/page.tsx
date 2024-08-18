"use client"
import { useTranslations } from "next-intl";
import Event from "./components/EventSection/Event";
import FailedMessage from "./components/FailedMessage";
import OurPartners from "./components/OurPartners";
import Footer from "./components/Footer";
import Image from "next/image";
import Clr_Sqrs_full from "./components/ColorSquersValuesFull";
import ValuesPage from "./components/ColorSquersValuesFull";
import DepartmentsPage from "./components/ColorSquersDepartmentsPage";

export default function Home() {
  const t = useTranslations("Home");
  const events = useTranslations("Events");
  return (
    <main>
      <div className="relative">
        <ValuesPage />
        <OurPartners />
        <Image
          src="/Partners_bg.svg"
          layout="fill"
          objectFit="cover"
          className="w-full h-full -z-20 opacity-90"
          alt=""
        />
      </div>
    </main>
  );
}