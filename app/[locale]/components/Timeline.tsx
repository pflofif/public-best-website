import Image from "next/image";
import { maruipol_bold, inter } from "../../fonts/fonts";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import React, { useRef, useState, useEffect } from "react";

type TimelineElement = {
    year: number,
    title: string,
    text_color: string,
    photo: string
};

const TIMELINE_EVENTS: TimelineElement[] = [
    { year: 1989, title: "Створення міжнародної організації BEST", text_color: "", photo: "/Timeline/create.jpg" },
    { year: 2002, title: "Заснування BEST у Львові", text_color: "", photo: "/Timeline/2002.JPG" },
    { year: 2004, title: "Перший BEST Course у Львові", text_color: "#FFE600", photo: "/Timeline/course.jpg" },
    { year: 2007, title: "Перший ІЯК", text_color: "#0F0BCB", photo: "/Timeline/ejf.jpg" },
    { year: 2009, title: "Перший ВЕС", text_color: "#FFAF75", photo: "/Timeline/ebec.jpg" },
    { year: 2011, title: "Перший BTW", text_color: "#EC9EFF", photo: "/Timeline/btw.jpg" },
    { year: 2014, title: "Перший BEST::HACKath0n", text_color: "#77DD77", photo: "/Timeline/hack.jpg" },
    { year: 2021, title: "Перший BCI", text_color: "#EC9EFF", photo: "/Timeline/bci.jpg" },
    { year: 2024, title: "Перший BEST::CTF", text_color: "#FF617E", photo: "/Timeline/ctf.jpg" },
    { year: 9999, title: "To Be Continued", text_color: "#808080", photo: "/infinitySign.svg" },
    { year: 9999, title: "To Be Continued", text_color: "#808080", photo: "/infinitySign.svg" },
];

function TimelineElement({ year, title, text_color, photo, isActive }: TimelineElement & { isActive: boolean }) {

    if (year === 9999) {
        return (
            <div className="flex flex-col items-center justify-center h-[40vh] md:h-[58vh] border-2 rounded-2xl max-w-md md:max-w-lg p-4 md:p-6">
                <div className="text-center text-gray-400 ">
                    <p className="text-3xl font-bold">To Be Continued</p>
                    <p className="text-lg mt-2">Може саме ти створиш щось нове!</p>
                </div>
                <Image
                    src={photo}
                    width={50}
                    height={50}
                    alt="Infinity Icon"
                    className="mt-4 grayscale"
                />
            </div>
        );
    }

    return (
        <div className={`flex flex-col justify-between border-2 rounded-2xl max-w-md md:max-w-lg w-full p-4 md:p-6 ${isActive ? "" : "grayscale"}`}>
            <div className="flex flex-col flex-grow">
                <Image
                    src={photo}
                    width={500}
                    height={500}
                    alt={title}
                    className={`w-[292px] h-[200px] md:w-[404px] md:h-[254px] object-cover rounded-2xl ${isActive ? "" : "grayscale"}`}
                />
                <p style={{ color: isActive ? text_color : "#D7D7D7" }} className={`${maruipol_bold.className} text-[2.125em] md:text-[3em] mt-4`}>{year}</p>
                <p className={`${inter.className} ${isActive ? "text-black" : "text-[#D7D7D7]"} text-[1rem] md:text-[1.125em] mt-2`}>{title}</p>
            </div>
        </div>
    );
}

function YearSelectionDesktop({ swiperRef, setActiveIndex, activeIndex }: { swiperRef: any, setActiveIndex: any, activeIndex: number }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return <div className="hidden md:flex justify-center items-center space-x-4 mx-auto my-8 w-[75%]">
        {TIMELINE_EVENTS.slice(0, -2).map((item, index) => (
            <button
                key={index}
                onClick={() => {
                    swiperRef.current?.swiper.slideTo(index);
                    setActiveIndex(index);
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                    color: activeIndex === index || hoveredIndex === index ? "" : "#D7D7D7",
                    borderColor: activeIndex === index || hoveredIndex === index ? item.text_color : "transparent"
                }}
                className={`${maruipol_bold.className} text-[20px] md:text-[32px] font-bold border-b-4 px-2 w-[202px]`}
            >
                {item.year}
            </button>
        ))}
    </div>;
}


export default function Timeline() {
    const swiperRef = useRef<SwiperRef>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChangeSlide = (slideIndex: number) => {
        const lastIndex = TIMELINE_EVENTS.length - 1;
        let newIndex = slideIndex;

        if (slideIndex < 0) newIndex = lastIndex;
        if (slideIndex > lastIndex) newIndex = 0;

        setActiveIndex(newIndex);
        swiperRef.current?.swiper.slideTo(newIndex);
    };

    useEffect(() => {
        handleChangeSlide(0);
    }, [])

    return (
        <>
            <h1 className=" text-3xl lg:text-5xl lg:font-bold font-bold lg:mb-16 mb-8 text-center relative">
                <span className="text-black">Найголовніші</span> <span className="text-best-blue">Дати</span>
                <Image
                    src="./deps.svg"
                    width={292}
                    height={102}
                    className="w-24 lg:w-44 absolute top-6 md:top-8 right-12 md:right-[30%] lg:right-[33%] -z-10"
                    alt=""
                />
            </h1>
            <div className="flex justify-evenly px-4 md:flex-col items-center">
                <button
                    onClick={() => handleChangeSlide(activeIndex - 1)}
                    className="md:hidden text-2xl  bg-white p-2 rounded-full text-neutral-400 shadow-lg"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-neutral-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        ></path>
                    </svg>
                </button>
                <Swiper
                    ref={swiperRef}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 50, slidesOffsetAfter: 0, centeredSlides: true, allowTouchMove: true, navigation: true },
                        640: { slidesPerView: 2, spaceBetween: 50, slidesOffsetAfter: 0, centeredSlides: true, allowTouchMove: true, navigation: true },
                        1024: { slidesPerView: 3, spaceBetween: 20, slidesOffsetAfter: 200, centeredSlides: false, allowTouchMove: false, navigation: false },
                    }}
                    initialSlide={activeIndex}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className='w-[75%]'>
                    {TIMELINE_EVENTS.map((item, index) => (
                        <SwiperSlide key={index}>
                            <TimelineElement
                                key={index}
                                year={item.year}
                                title={item.title}
                                text_color={item.text_color}
                                photo={item.photo}
                                isActive={activeIndex === index}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    className="md:hidden text-2xl bg-white p-2 rounded-full shadow-lg text-neutral-400"
                    onClick={() => handleChangeSlide(activeIndex + 1)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                </button>

                <YearSelectionDesktop swiperRef={swiperRef} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
            </div>
        </>
    );
}