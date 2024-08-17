import { maruipol_bold, inter } from "../fonts/fonts"
import Image from "next/image"



export default function Footer(){
    return (
        <>
        <div className={ `${inter.className} w-full min-h-64 bg-best-blue relative`}> 
            <Image
                src="/Vector.svg"
                width={30}
                height={30}
                className="lg:absolute h-auto w-auto z-0 lg:flex hidden overflow-hidden lg:self-center"
                alt=""
            />
            <div className="text-white flex lg:flex-row flex-col justify-between items-center md:px-24 lg:px-52 p-4 lg:p-10 `">
            <div className="flex text-left z-10">
                <h1 className={`${maruipol_bold.className} text-white lg:max-w-xs text-3xl`}>МГО “Рада студентів технічних університетів” ЄДРПОУ</h1>
            </div>
            <div className="flex lg:px-10 z-10">
                <Image
                    src="/Line.svg"
                    width={30}
                    height={30}
                    className="w-auto lg:flex hidden"
                    alt="Picture of the author"
                />
                <Image
                    src="/Line_vertical.svg"
                    width={30}
                    height={30}
                    className="w-auto flex lg:hidden py-8"
                    alt="Picture of the author"
                />
            </div>
            <div className="lg:flex hidden text-left flex-row text-white text-sm gap-8 z-10 px-24">
                <div className="flex flex-col gap-3">
                    <a href="https://t.me/bestlviv">
                        <h1 className="hover:scale-105">Про нас</h1>
                    </a>
                    <a href="https://t.me/bestlviv">
                        <h1 className="hover:scale-105">Блог</h1>
                    </a>
                    <a href="https://t.me/bestlviv">
                        <h1 className="hover:scale-105">Івенти</h1>
                    </a>
                    <a href="https://t.me/bestlviv">
                        <h1 className="hover:scale-105">Можливості</h1>
                    </a>
                </div>
                <div className="flex flex-col gap-3">
                    <a href="https://t.me/bestlviv">
                        <h1 className="hover:scale-105">Галерея</h1>
                    </a>
                    <a href="https://t.me/bestlviv">
                        <h1 className="hover:scale-105">Q/A</h1>
                    </a>
                    <a href="https://t.me/bestlviv">
                        <h1 className="hover:scale-105">Контакти</h1>
                    </a>
                </div>
            </div>
            <div className="flex flex-col h-full justify-between z-10 gap-6">
                    <div className="flex flex-row justify-between w-full">
                        <a href="https://t.me/bestlviv">
                        <Image
                            src="/linkedin.svg"
                            width={30}
                            height={30}
                            alt="Picture of the author"
                            className="hover:scale-105"
                        />
                        </a>
                        <a href="https://t.me/bestlviv">
                        <Image
                            src="/instagram.svg"
                            width={30}
                            height={30}
                            alt="Picture of the author"
                            className="hover:scale-105"
                        />
                        </a>
                        <a href="https://t.me/bestlviv">
                        <Image
                            src="/telegram.svg"
                            width={30}
                            height={30}
                            alt="Picture of the author"
                            className="hover:scale-105"
                        />
                        </a>
                        <a href="https://t.me/bestlviv">
                        <Image
                            src="/tik_tok.svg"
                            width={30}
                            height={30}
                            alt="Picture of the author"
                            className="hover:scale-105"
                        />
                        </a>
                        <a href="https://t.me/bestlviv">
                        <Image
                            src="/youtube.svg"
                            width={30}
                            height={30}
                            alt="Picture of the author"
                            className="hover:scale-105"
                        />
                        </a>

                    </div>
                    <div>
                        <h1 className="font-bold">Адреса:</h1>
                        <h1 className="">вул. С. Бандери, 12, м. Львів, Україна</h1>
                    </div>
                    <div>
                        <h1 className="font-bold">Email:</h1>
                        <h1 className="">lviv@best-eu.org</h1>
                    </div>
                    
            </div>
        </div>
        </div>
        </>
    )
}
