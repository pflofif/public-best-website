import Image from "next/image";
import { maruipol_bold, inter } from "../../fonts/fonts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const boardiesData = [
  {
    imgSrc: "/Nana.png",
    alt: "President",
    name: "Нана Пасєка",
    description: "Президентка",
  },
  {
    imgSrc: "/khrystia.png",
    alt: "secretary",
    name: "Христина Соджак",
    description: "Секретарка",
  },
  {
    imgSrc: "/zahar.png",
    alt: "treasurer",
    name: "Захар Підлісецький",
    description: "Скарбник",
  },
  {
    imgSrc: "/bohdana.png",
    alt: "hr",
    name: "Богдана Гонсеровська",
    description: "Віце-президентка з людських ресурсів",
  },
  {
    imgSrc: "/katya.png",
    alt: "pr",
    name: "Катерина Замкова",
    description: "Віце-президентка зі зв'язків з громадськістю",
  },
  {
    imgSrc: "/alona.png",
    alt: "ds",
    name: "Альона Климюк",
    description: "Віце-президентка із графічного дизайну",
  },
  {
    imgSrc: "/bohdan.png",
    alt: "it",
    name: "Богдан Вівчар",
    description: "Віце-президент з інформаційних технологій",
  },
  {
    imgSrc: "/maks.png",
    alt: "fr",
    name: "Максим Сеньків",
    description: "Віце-президент з ресурсного забезпечення",
  },
];

const Boardie = ({
  imgSrc,
  alt,
  name,
  description,
}: {
  imgSrc: string;
  alt: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-between rounded-xl shadow-xl hover:scale-105 duration-500 pb-6 w-60 bg-white">
      <Image
        src={imgSrc}
        alt={alt}
        layout="responsive"
        width={300}
        height={300}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="flex flex-col justify-center items-center p-2 flex-grow">
        <h1 className={`${maruipol_bold.className} text-lg text-center`}>
          {name}
        </h1>
        <p className={`${inter.className} text-center text-xs`}>
          {description}
        </p>
      </div>
    </div>
  );
};

const BoardieMobile = ({
    imgSrc,
    alt,
    name,
    description,
  }: {
    imgSrc: string;
    alt: string;
    name: string;
    description: string;
  }) => {
    return (
      <div className="flex flex-col justify-between rounded-xl shadow-lg hover:scale-105 duration-500 p-4 w-60 bg-white mx-auto my-8">
        <Image
          src={imgSrc}
          alt={alt}
          layout="responsive"
          width={300}
          height={300}
          className="w-full h-56 rounded-xl"
        />
        <div className="flex flex-col justify-center items-center p-2 flex-grow">
          <h1 className={`${maruipol_bold.className} text-xl text-center`}>
            {name}
          </h1>
          <div className="p-2 px-4 bg-red-200 rounded-3xl mt-2">
            <p className={`${inter.className} text-center text-xs bg-red-200`}>
                {description}
            </p>
          </div>
          
        </div>
      </div>
    );
  };

  

export default function Boardies() { 
 return (
    <div className="min-h-screen flex items-center justify-center mt-8 lg:mt-40 w-full">
      {/* Desktop View */}
      <div className="gap-4 flex flex-wrap w-full justify-center my-8 max-w-6xl hidden md:flex">
        {boardiesData.map((p) => (
          <Boardie
            key={p.name}
            imgSrc={p.imgSrc}
            alt={p.alt}
            name={p.name}
            description={p.description}
          />
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full flex justify-center items-center">
        <Swiper
          spaceBetween={100}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'custom'
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="flex items-center justify-center mx-auto w-full"
        >
          {boardiesData.map((p) => (
            <SwiperSlide key={p.name}>
              <BoardieMobile
                imgSrc={p.imgSrc}
                alt={p.alt}
                name={p.name}
                description={p.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
