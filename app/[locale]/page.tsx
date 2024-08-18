"use client"
import { useTranslations } from "next-intl";
import Event from "./components/EventSection/Event";
export default function Home() {
  const t = useTranslations("Home");
  const events = useTranslations("Events");
  return (
    <main>
      <section className="max-w-[1440px] mx-auto mt-20">
        <Event heading={events("CTF.title")} description={events("CTF.description")} sectionColor={"best-red"} imageName="bec" isInverted={true} />
        <Event heading={events("BEC.title")} description={events("BEC.description")} sectionColor={"best-green"} imageName="bec" />
        <Event heading="BEST Company Insight" description="mazafaka" sectionColor={"best-purple"} imageName="bec" isInverted={true} />
        <Event heading="Інженерний Ярмарок Кар’єри" description="mazafaka" sectionColor={"best-blue"} imageName="ejf" />
        <Event heading="BEST Engineering Competion" description="mazafaka" sectionColor={"best-orange"} imageName="bec" isInverted={true} />
        <Event heading="BEST Traning Week" description="mazafaka" sectionColor={"best-pink"} imageName="bec"  />
      </section>

    </main>
  )
}
