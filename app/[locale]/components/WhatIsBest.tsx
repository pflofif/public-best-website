import { inter, maruipol_bold } from "../../fonts/fonts";
import Image from "next/image";
export default function WhatIsBest() {
  return (
    <section className="items-center justify-center max-w-[1444px] px-[3.188rem]  mx-auto gap-8 lg:pt-[18.75rem] lg:pb-[10.625rem] pt-[5.125rem] pb-[8.25rem]">
      <h2
        className={`${maruipol_bold.className} text-nowrap text-hack-green text-4xl lg:text-5xl mb-[3.5rem] lg:mb-[5.125rem] text-center relative`}
      >
        Що Таке
        <span className="text-best-blue"> BEST</span>
        <Image
          src="/partners_line.svg"
          width={242}
          height={102}
          className="absolute -bottom-6 lg:-bottom-10 left-1/2 transform scale-[0.8]  w-36 lg:w-52 -z-10"
          alt=" "
        />
        ?
      </h2>
      <div className="flex justify-center relative xl:flex-nowrap flex-wrap gap-6 lg:gap-5 ">
        <Image
          src="/whatbec-leftLines.svg"
          width={242}
          height={102}
          className="absolute lg:left-[-120px] lg:bottom-[-120px] transform scale-[0.25]  w-36 lg:w-52 -z-10"
          alt=" "
        />
        <Image
          src="/whatbec-rightLines.svg"
          width={142}
          height={52}
          className="absolute  lg:right-[-120px] lg:top-[-120px] transform scale-[0.25]  w-36 lg:w-52 -z-10"
          alt=" "
        />
        <div className="bg-[#FFA5DB] relative flex justify-center  order-2 xl:order-1 items-center xl:shrink-0 basis-[700px] p-[0.9rem] sm:px-[2.5rem] sm:py-[3.313rem]  sm:rounded-[50px] rounded-[20px]">
          <Image
            className=" h-full w-full md:w-[613px] md:h-[338px] object-cover  sm:rounded-[24px] rounded-[12px]"
            src="/WhatIsBest.jpg"
            alt={"event Image"}
            width={613}
            height={338}
          ></Image>

          <Image
            src="/whatbec-rightLinesMob.svg"
            width={142}
            height={52}
            className="absolute lg:hidden  right-[-80px] bottom-[-70px] transform scale-[0.35]  w-36 lg:w-52 -z-10"
            alt=" "
          />
        </div>
        <div
          className={`${inter.className} relative order-1 xl:order-2 basis-[700px]  bg-best-yellow  p-[0.9rem] sm:px-[2.5rem] sm:py-[3.313rem] paragraphMobile md:text-paragraphDesktop sm:rounded-[50px] rounded-[20px]`}
        >
          <Image
            src="/whatbec-leftLinesMob.svg"
            width={242}
            height={102}
            className="absolute lg:hidden left-[-80px] top-[-70px] transform scale-[0.35]  w-36 lg:w-52 -z-10"
            alt=" "
          />
          <p className="text-paragraphMobile md:text-paragraphDesktop mb-8 lg:mb-12">
            BEST (Board of European Students of Technology) – міжнародна
            неприбуткова, неполітична, молодіжна громадська організація, яка
            була створена 1989 року в Берліні.
          </p>
          <h3
            className={`${maruipol_bold.className} text-best-blue mb-4 lg:mb-6 lg:text-[1.75rem] text-xl`}
          >
            Осередок BEST Lviv
          </h3>
          <div>
            <p className="text-paragraphMobile md:text-paragraphDesktop">
              Осередок BEST Lviv було створено у 2002 році при Національному
              університеті “Львівська політехніка”.
            </p>
            <p className="text-paragraphMobile md:text-paragraphDesktop">
              Наша діяльність полягає у налагодженні зв'язків між Студентами,
              Компаніями та Університетом. Львівський осередок є одним з трьох
              LBG в Україні (Київ, Львів, Вінниця)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
