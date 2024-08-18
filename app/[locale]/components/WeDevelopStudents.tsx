import Image from 'next/image'
import { maruipol_bold, inter } from "../fonts/fonts";

export default function WeDevelopStudents() {
    return (
        <section className={`${maruipol_bold.className} bg-best-blue lg:h-full relative overflow-hidden`}>
            <Image
                src='/VectorWeDevelopStudents.svg'
                layout='fill'
                objectFit='cover'
                className='w-full h-full z-0 -rotate-75 scale-150 absolute lg:hidden'
                alt=''
            />

            <Image src='/bestiesPhotoWithElement.png'
                alt='besties photo'
                width={1920}
                height={1085}
                className='hidden lg:block w-full h-full z-0'
            />

            <div className='lg:absolute lg:inset-0 flex lg:flex-row items-center lg:items-start justify-center lg:justify-start  pt-48 lg:pt-24 lg:pl-36 2xl:pl-52 mb-20 sm:mb-64 lg:mt-20 2xl:mt-40'>
                <div className='relative w-fit max-w-[416px] lg:max-w-[500px] 2xl:max-w-[800px] text-center lg:text-left mb-96'>
                    <Image src='/raysDevelopingStudents.svg'
                        alt=''
                        height={60}
                        width={60}
                        className='absolute -top-4 left-0 lg:hidden'
                    />
                    <Image src='/raysDevelopingStudents.svg'
                        alt=''
                        height={60}
                        width={60}
                        className='absolute -top-4 right-0 transform scale-x-[-1] lg:scale-y-[-1] lg:top-[90px] lg:right-40 xl:top-[116px] xl:right-16 2xl:top-36 2xl:right-72'
                    />
                    <p className='text-[44px] lg:text-6xl xl:text-[80px] 2xl:text-8xl xl:w-[700px] 2xl:w-[800px] font-bold text-white lg:mb-6 xl:mb-10 2xl:mb-14'>Ми Розвиваємо
                        Студентів.</p>
                    <div className='flex flex-col lg:flex-row lg:gap-4 xl:gap-6 2xl:gap-8'>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdTcKMiPuStsqNnYsosn4wJmKXgpXpSWuq37gVVEk5OtcaT_w/viewform'>
                            <button className={`${inter.className} text-sm 2xl:text-lg flex items-center justify-center rounded-full bg-best-yellow text-best-blue w-[195px] xl:w-52 2xl:w-64 h-[46px] xl:h-14 2xl:h-16 mx-auto mt-4 lg:mx-0 hover:bg-best-blue hover:text-best-yellow hover:scale-110 transition-all duration-500 hover:shadow-[0_0_10px_5px_rgba(255,241,108,0.7)] border border-best-yellow`}>
                                Приєднатись до нас
                            </button>
                        </a>
                        <a href='/become-a-partner'>
                            <button className={`${inter.className} text-sm 2xl:text-lg flex items-center justify-center rounded-full bg-best-blue text-best-yellow w-[174px] xl:w-52 2xl:w-64 h-[46px] xl:h-14  2xl:h-16 mx-auto mt-4 lg:mx-0 hover:bg-best-yellow hover:text-best-blue hover:scale-110 transition-all duration-500 hover:shadow-[0_0_10px_5px_rgba(255,241,108,0.7)] border border-best-yellow`}>
                                Стати партнером
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <Image src='/bestiesPhoto.png'
                alt='besties photo'
                width={1833}
                height={993}
                className='absolute bottom-0 lg:hidden scale-150 md:scale-125 transform -translate-y-8 sm:-translate-y-20 md:-translate-y-0'
            />
        </section>
    )
}
