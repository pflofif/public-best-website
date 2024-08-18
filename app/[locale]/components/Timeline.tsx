import Image from 'next/image'

export default function Timeline() {
    const timelineEvents = [
        { year: '1989', description: 'Створення міжнародної організації' },
        { year: '1902', description: 'Заснування організації у Львові' },
        { year: '1904', description: 'Перший курс' },
        { year: '1907', description: 'Перший ІЯК' },
        { year: '1909', description: 'Перший BEC' },
        { year: '2014', description: 'Перший HACKath0n' }
    ];

    return (
        <>
        <section className='w-full h-auto py-10 lg:py-0 bg-white flex flex-row justify-center items-start relative'>
            <Image 
                src='/timelineImage.svg'
                alt='timeline'
                draggable='false'
                width={20}
                height={800}
                className='max-h-[770px] lg:hidden'
            />
            <div className='flex flex-col mt-3 space-y-[52px] relative lg:hidden'>
                {timelineEvents.map((event, index) => (
                    <div key={index} className='flex flex-row items-start relative'>
                        <span className='w-[20px] h-[20px] rounded-full bg-best-blue mt-2 absolute left-[-20px]'></span>
                        <div className='flex flex-col items-start w-auto max-h-20 ml-6'>
                            <span className='text-2xl text-best-blue font-bold'>{event.year}</span>
                            <p className='text-base max-w-48'>{event.description}</p>
                        </div>
                    </div>
                ))}
                <div className='flex flex-row items-start relative'>
                        <span className='w-[20px] h-[20px] rounded-full bg-best-blue absolute left-[-20px]'></span>
                        <Image 
                            src='/infinitySign.svg'
                            alt='infinity sign'
                            draggable='false'
                            width={49.5}
                            height={22}
                            className='ml-6'
                        />
                    </div>
            </div>
        </section>
        {/* Вибачте за наступний код, кожен з тих таймлайн пойнтів різний за шириною */}
        <section className='hidden lg:flex relative justify-center'>
            <Image 
                src='/timelineImageDesktop.svg'
                alt='timeline'
                draggable='false'
                width={1435}
                height={153}
                className='absolute w-10/12 left-1/2 transform -translate-x-1/2 z-0 lg:top-[106px] xl:top-36 2xl:top-[128px] lg:max-h-24 xl:max-h-40'
            />

            <div className='z-10 w-10/12 lg:max-w-[900px] xl:max-w-[1490px]'>
                <div className='grid grid-cols-6'>
                    <div className='grid grid-rows-2 lg:gap-24 xl:gap-[140px] 2xl:gap-[190px] ml-2'>
                        <div className='row-start-2 flex flex-col items-start'>
                            <span className='text-[28px] xl:text-[36px] text-best-blue font-bold'>1989</span>
                            <p className='text-[14px] xl:text-[19px] max-w-[218px]'>Створення міжнародної 
                            організації</p>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 lg:gap-24 xl:gap-[140px] 2xl:gap-[190px]'>
                        <div className='row-start-1 flex flex-col-reverse items-start'>
                            <span className='text-[28px] xl:text-[36px] text-best-blue font-bold'>1902</span>
                            <p className='text-[14px] xl:text-[19px] max-w-[218px]'>Заснування організації у Львові</p>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 lg:gap-24 xl:gap-[140px] -ml-1 2xl:-ml-2 2xl:gap-[190px]'>
                        <div className='row-start-2 flex flex-col items-start'>
                            <span className='text-[28px] xl:text-[36px] text-best-blue font-bold'>1904</span>
                            <p className='text-[14px] xl:text-[19px] max-w-[218px]'>Перший курс</p>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 lg:gap-24 xl:gap-[140px] -ml-3 2xl:-ml-4 2xl:gap-[190px]'>
                        <div className='row-start-1 flex flex-col-reverse items-start'>
                            <span className='text-[28px] xl:text-[36px] text-best-blue font-bold'>1907</span>
                            <p className='text-[14px] xl:text-[19px] max-w-[218px]'>Перший ІЯК</p>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 lg:gap-24 xl:gap-[140px] -ml-5 2xl:-ml-6 2xl:gap-[190px]'>
                        <div className='row-start-2 flex flex-col items-start'>
                            <span className='text-[28px] xl:text-[36px] text-best-blue font-bold'>1909</span>
                            <p className='text-[14px] xl:text-[19px] max-w-[218px]'>Перший BEC</p>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 lg:gap-24 xl:gap-[140px] -ml-6 2xl:-ml-8 2xl:gap-[190px]'>
                        <div className='row-start-1 flex flex-col-reverse items-start'>
                            <span className='text-[28px] xl:text-[36px] text-best-blue font-bold'>2014</span>
                            <p className='text-[14px] xl:text-[19px] max-w-[218px]'>Перший HACKath0n</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}