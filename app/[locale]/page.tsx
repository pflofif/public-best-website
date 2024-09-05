"use client"
import { useTranslations } from "next-intl";

import Timeline from './components/Timeline'
import OurPartners from "./components/OurPartners";
import Image from "next/image";
import Header from "./components/Header";
import WeDevelopStudents from "./components/WeDevelopStudents";
import ValuesPage from "./components/DepartmentsAndIdentity/ColorSquersValuesFull";
import EventSliderSection from "./components/EventSliderSection/EventSliderSection";
import HowOrganizationWork from "./components/HowOrganizationWork";
import WhatIsBest from "./components/WhatIsBest";

export default function Home() {
    const t = useTranslations("Home");
    const events = useTranslations("Events");
    return (
        <main>
            <Header />
            <WeDevelopStudents />
            <div className="relative">
                <WhatIsBest />
                <Timeline />
                <ValuesPage />
                <EventSliderSection />
                <HowOrganizationWork />
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
