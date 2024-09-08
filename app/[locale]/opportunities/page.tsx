"use client"
import { useEffect, useState } from "react";
import FailedMessage from "../components/FailedMessage";
import Image from "next/image";
import Event from "../components/EventSection/Event";
import { maruipol_bold, inter } from "../../fonts/fonts";

type EventType = {
    _id: string;
    name: string;
    description: string;
    data: string;
    sectionColor: string;
    isInProgress: boolean;
};

export default function Page() {
    const [events, setEvents] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/events/in-progress")
            .then((response) => response.json())
            .then((data) => {
                setEvents(data);
                setLoading(false);
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

    if (events.length === 0) {
        return (
            <FailedMessage headerText="На жаль, в найближчий час нічого не відбуватиметься 😢" text="Але слідкуй за актуальною інформацією у наших соцмережах та дізнавайся про новини  першим!" />
        )
    }

    if (events.length !== 0) {
        return (
            <div className="relative min-h-screen lg:pt-0 pt-40">
                <Image
                    src="/Partners_bg.svg"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full -z-20 opacity-90"
                    alt=""
                />

                <div className="py-20 lg:pt-48 lg:pb-28 flex items-center w-full justify-center flex-col p-6">
                    <h1 className={`${maruipol_bold.className} text-3xl lg:text-5xl lg:font-bold font-bold lg:mb-6 mb-8 text-center relative`}>
                        <span className="text-black">Актуальні Можливості</span> <span className="text-blue-500">Для Тебе</span>
                        <Image
                            src="/deps.svg"
                            width={292}
                            height={102}
                            className="w-24 lg:w-44 absolute top-6 -right-2 lg:-right-8 -z-10"
                            alt=""
                        />

                    </h1>

                    <p className={`${inter.className} text-center text-sm lg:text-base lg:pt-8 max-w-screen-md lg:font-inter`}>
                        Усі івенти ми робимо для студентів абсолютно безкоштовно!<br />
                        Саме зараз у вас є можливість взяти участь у таких внутрішніх та міжнародних ініціативах
                    </p>
                </div>

                <section className="max-w-[1440px] mx-auto">
                    {events.map((event, index) => (
                        <Event
                            key={event._id}
                            heading={event.name}
                            description={event.description}
                            sectionColor={event.sectionColor}
                            Base64Image={event.data}
                            isInverted={index % 2 !== 0}
                        />
                    ))}
                </section>
            </div>
        )
    }
}