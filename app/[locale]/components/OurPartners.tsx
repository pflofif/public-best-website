import { maruipol_bold, inter } from "../fonts/fonts";
import Image from "next/image";

const partnersData = [
  {
    imgSrc: "sombra.svg",
    alt: "sombra",
  },
  {
    imgSrc: "kevich.svg",
    alt: "kevich",
  },
  {
    imgSrc: "tskt.svg",
    alt: "tskt",
  },
  {
    imgSrc: "teamvoy.svg",
    alt: "teamvoy",
  },
  {
    imgSrc: "softserve.svg",
    alt: "softserve",
  },
  {
    imgSrc: "leobit.svg",
    alt: "leobit",
  },
  {
    imgSrc: "global.svg",
    alt: "global",
  },
  {
    imgSrc: "lmr.svg",
    alt: "lmr",
  },
 
];

const Partner = ({
  imgSrc,
  alt,
}: {
  imgSrc: string;
  className?: string;
  alt: string;
}) => {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      height={128}
      width={208}
      className="md:h-24 h-12 hover:scale-105 transition-all duration-500"
    />
  );
};

export default function OurPartners() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center max-w-7xl w-full px-6 mx-auto gap-8">
      <h2
        className={`${maruipol_bold.className} text-hack-green text-4xl lg:text-5xl my-2 text-center relative`}
      >
        <span>Наші</span> <span className="text-best-blue">Партнери</span>
        <Image
            src="/partners_line.svg"
            width={292}
            height={102}
            className="absolute -bottom-6 lg:-bottom-10 right-0 w-36 lg:w-52 -z-10"
            alt=" "
        />
      </h2>
      <p
        className={`${inter.className} text-best-gray md:text-lg text-xs my-2 text-center max-w-2xl`}
      >
        За час нашої діяльності у нас з’явилось багато компаній-партнерів, з якими ми співпрацюємо та займаємось волонтерством!
      </p>

      <div className="md:gap-24 gap-12 flex flex-wrap w-full justify-center my-8">
        {partnersData.map((p, index) => (
          <Partner imgSrc={p.imgSrc} alt={p.alt} />
        ))}
      </div>
      <Image
        src="/stars.svg"
        width={292}
        height={102}
        className="absolute bottom-2 md:bottom-24 right-2 md:right-24 w-12 w-8 -z-10"
        alt=" "
    />
    <Image
        src="/stars.svg"
        width={292}
        height={102}
        className="absolute top-48 left-24 md:left-72 w-8 md:w-12 -z-10 rotate-45"
        alt=" "
    />
    

    </section>
  );
}