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
      <Footer />

      <section className="max-w-[1440px] mx-auto mt-20">
        <Event heading={events("CTF.title")} description={events("CTF.description")} sectionColor={"best-red"} imageName="bec" isInverted={true} />
        <Event heading={events("BEC.title")} description={events("BEC.description")} sectionColor={"best-green"} imageName="bec" />
        <Event heading="BEST Company Insight" description="mazafaka" sectionColor={"best-purple"} imageName="bec" isInverted={true} />
        <Event heading="Інженерний Ярмарок Кар’єри" description="mazafaka" sectionColor={"best-blue"} imageName="ejf" />
        <Event heading="BEST Engineering Competion" description="mazafaka" sectionColor={"best-orange"} imageName="bec" isInverted={true} />
        <Event heading="BEST Traning Week" description="mazafaka" sectionColor={"best-pink"} imageName="bec" />
      </section>
    </main>
  );
}