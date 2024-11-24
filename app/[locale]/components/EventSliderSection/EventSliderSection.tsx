"use client";
import React from 'react';
import LinkLearnMore from '../LinkLearnMore';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwiperElementProps {
  imageUrl: string;
  title: string;
  description: string;
}

type EventData = {
  name: string;
  description: string;
  imageUrl: string;
};

function SwiperElement({ imageUrl, title, description }: SwiperElementProps) {
  return (
    <div className='flex justify-center lg:block'>
      <div className='flex flex-col px-8 w-[300px] md:w-[404px] 2xl:w-[484px] py-8 bg-[#0400C5] rounded-3xl lg:h-[500px]'>
        <div className='mb-4 rounded-2xl overflow-hidden'>
          <img
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

const API_URL = 'https://localhost:44355';

export default function EventSliderSection() {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/events/what-we-do`)
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <section className='bg-best-blue text-white relative pt-10 lg:py-32 min-h-0 lg:overflow-clip'>
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <img className='w-full h-full object-cover' src="/eventSliderSectionBg.svg" alt='bg' />
      </div>
      <div className='lg:flex items-center gap-10 md:gap-24 relative z-1 max-w-[1920px] mx-auto lg:px-[11%]'>
        <div className='basis-[300px] xl:basis-[650px] lg:-mt-32 flex-shrink-0 text-center lg:text-left p-2'>
          <h2 className='text-4xl sm:text-6xl font-bold mb-12'>
            Чим ми{' '}
            <span className='lg:hidden block h-0  '><br /></span>
            займаємось?
          </h2>
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-6 w-[324px] md:w-full text-center md:text-left ">
              Ми працюємо з 2002 року та вже більше 20 років допомагаємо студентам
              реалізовувати свій потенціал та здійснювати мрії.
            </p>
            <p className="mb-12 w-[324px] md:w-full text-center md:text-left">
              Наші проєкт спрямовані на розвиток різноманітних навичок.
            </p>
          </div>
          <LinkLearnMore
            btnColor='best-yellow'
            href='/about-us'
            text='Дізнатись більше'
            textColor='best-blue'
          />
        </div>
        <div className='lg:width-[844px] relative'>
          <Swiper
            breakpoints={{
              // when window width is >= 0px
              0: {
                slidesPerView: 1,
                spaceBetween: 50,
                slidesOffsetAfter: 0,
                centeredSlides: true,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesOffsetAfter: 0,
                centeredSlides: true,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                slidesOffsetAfter: 200,
                centeredSlides: false,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            className='mt-20 lg:mt-0 lg:absolute top-0 left-0 h-[660px] min-w-0 lg:max-w-[800px]'>
            {events.map((ev, index) => {
              return (
                <SwiperSlide key={index}>
                  <SwiperElement
                    title={ev.name}
                    description={ev.description}
                    imageUrl={ev.imageUrl}
                  />
                </SwiperSlide>)
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
