import React from 'react';
import LinkLearnMore from '../LinkLearnMore';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
interface SwiperElementProps {
    imageUrl: string;
    title: string;
    description: string;
}

function SwiperElement({ imageUrl, title, description }: SwiperElementProps) {
    return (
        <div className='flex justify-center lg:block'>
            <div className='flex flex-col px-8 w-[300px] md:w-[404px] 2xl:w-[484px] py-7 bg-[#0400C5] rounded-3xl'>
                <div className='mb-4 rounded-2xl overflow-hidden'>
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={564}
                        height={300}
                        className=''
                    />
                </div>
                <h3 className='text-xl text-center mb-1 font-bold '>{title}</h3>
                <p className='basis-[150px]'>{description}</p>
            </div>
        </div>
    );
}

export default function EventSliderSection() {
    return (
        <section className=' bg-best-blue text-white relative pt-10  lg:py-32 min-h-0 lg:overflow-clip'>
            <div className='absolute top-0 left-0 w-full h-full  z-0'><img className='w-full h-full object-cover' src="/eventSliderSectionBg.svg" alt='bg'></img></div>
            <div className='lg:flex items-center gap-10 md:gap-24 relative z-1 max-w-[1920px] mx-auto lg:px-[11%]'>
                <div className='basis-[300px] xl:basis-[650px] lg:-mt-32  flex-shrink-0 text-center lg:text-left p-2'>
                    <h2 className='text-4xl sm:text-6xl font-bold mb-16'>Чим ми займаємось?</h2>


                    <p className='mb-6'>
                        Ми працюємо з 2002 року та вже більше 20 років допомагаємо студентам
                        реалізовувати свій потенціал та здійснювати мрії.
                    </p>
                    <p className='mb-16'>
                        Наші проєкт спрямовані на розвиток різноманітних навичок.
                    </p>


                    <LinkLearnMore
                        btnColor='best-yellow'
                        href='/about-us'
                        text='Дізнатись більше'
                        textColor='best-blue'
                    />

                </div>
                <div className='lg:width-[844px] relative'>
                    <Swiper
                        slidesPerView={window.innerWidth <= 1024 ? window.innerWidth <= 640 ? 1 : 2 : 1.5}
                        navigation
                        spaceBetween={window.innerWidth <= 1024 ? 50 : 20}
                        slidesOffsetAfter={window.innerWidth <= 1024 ? 0 : 200}
                        centeredSlides={window.innerWidth <= 1024 ? true : false}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Navigation]}
                        className='mt-20 lg:mt-0 lg:absolute top-0 left-0 h-[640px] min-w-0 lg:max-w-[800px]   '>

                        <SwiperSlide>
                            <SwiperElement
                                title='BEST::HACKath0n'
                                description="HACKath0n (від hack та marathon) — це інтенсивний захід, під час якого учасники працюють разом над розв'язанням певної створенням нового програмного продукту, сервісу чи додатку."
                                imageUrl='/eventImages/bec.png'
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SwiperElement
                                title='BEST::HACKath0n'
                                description="HACKath0n (від hack та marathon) — це інтенсивний захід, під час якого учасники працюють разом над розв'язанням певної створенням нового програмного продукту, сервісу чи додатку."
                                imageUrl='/eventImages/hack.jpg'
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SwiperElement
                                title='BEST::HACKath0n'
                                description="HACKath0n (від hack та marathon) — це інтенсивний захід, під час якого учасники працюють разом над розв'язанням певної створенням нового програмного продукту, сервісу чи додатку."
                                imageUrl='/eventImages/bec.png'
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SwiperElement
                                title='BEST::HACKath0n'
                                description="HACKath0n (від hack та marathon) — це інтенсивний захід, під час якого учасники працюють разом над розв'язанням певної створенням нового програмного продукту, сервісу чи додатку."
                                imageUrl='/eventImages/ejf.png'
                            />
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
        </section >
    );
}
