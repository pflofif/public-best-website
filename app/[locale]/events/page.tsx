"use client"

import { useTranslations } from "next-intl";
import Event from "../components/EventSection/Event";
import { useEffect, useState } from "react";
import Image from "next/image";
import DepartmentsBoxes from "../components/DepartmentsAndIdentity/ColorSquersDepartments";
import RectangleService from "../components/ServicesAndBoard/RectangleService";
import { maruipol_bold, inter } from "../../fonts/fonts";
import EventBg from "../../../public/EventBg.svg"
type EventType = {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    sectionColor: string;
    isInProgress: boolean;
    link: string;
};

const API_URL = 'https://best-lviv-web-api.azurewebsites.net';

export default function Page() {
    const [events, setEvents] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/api/events`)
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching in-progress events:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            </div>
        );
    }


    return (
        <div className="relative min-h-screen">
            <Image
                src="/Partners_bg.svg"
                layout="fill"
                objectFit="cover"
                className="w-full h-full -z-20 opacity-90"
                alt=""
            />

            <div className="min-h-screen flex items-center w-full justify-center flex-col p-6 lg:p-0 relative">
                <Image src={EventBg} alt="" className="absolute hidden md:block top-0 left-0 w-full h-full object-contain -z-10"></Image>
                <h1 className={`${maruipol_bold.className} text-3xl lg:text-5xl lg:font-bold font-bold lg:mb-6 mb-8 text-center relative`}>
                    <span className="text-black">Наші</span> <span className="text-best-blue">Івенти</span>
                    <Image
                        src="/deps.svg"
                        width={292}
                        height={102}
                        className="w-24 lg:w-44 absolute top-6 -right-2 lg:-right-8 -z-10"
                        alt=""
                    />

                </h1>

                <p className={`${inter.className} text-center text-sm lg:text-base lg:pt-8 max-w-screen-md lg:font-inter`}>
                    Івенти — основний наш вид діяльності.
                </p>
                <RectangleService />
            </div>

            <section className="max-w-[1440px] mx-auto">
                {events.map((event, index) => (
                    // @ts-ignore - Ignore type error for sectionColor
                    <Event
                        key={event._id}
                        heading={event.name}
                        description={event.description}
                        sectionColor={event.sectionColor as any}
                        imageUrl={event.imageUrl}
                        isInverted={index % 2 !== 0}
                        link={event.link}
                    />
                ))}
            </section>
        </div>
    )
}