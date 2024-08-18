"use client"
import { useTranslations } from "next-intl";

import Timeline from './components/Timeline'
import Event from "./components/EventSection/Event";
import FailedMessage from "./components/FailedMessage";
import OurPartners from "./components/OurPartners";
import Footer from "./components/Footer";
import Image from "next/image";
import Header from "./components/Header";
import ValuesPage from "./components/ColorSquersValuesFull";
import DepartmentsPage from "./components/ColorSquersDepartmentsPage";
import WeDevelopStudents from "./components/WeDevelopStudents";


export default function Home() {
  const t = useTranslations("Home");
  const events = useTranslations("Events");
  return (
    <main>
      <Header />
      <WeDevelopStudents/>
      <div className="relative">
        <Timeline/>
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
      <Footer />
    </main>
  );
}