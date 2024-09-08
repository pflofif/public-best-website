import Link from "next/link";
import { maruipol_bold, inter } from "../../fonts/fonts";
import Image from "next/image";


export default function HowOrganizationWork() {
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center max-w-7xl w-full py-36 px-12 mx-auto gap-8 lg:py-60">
            <h2
                className={`${maruipol_bold.className} text-hack-green text-4xl lg:text-5xl my-2 text-center relative`}
            >
                <span>Як </span>
                <span className="text-best-blue relative">Організація
                    <Image src="/HowOrganizationWork/organization_line_mobile.svg"
                        className="absolute lg:hidden -right-8 -bottom-10 -z-10"
                        alt=""
                        width={208}
                        height={128}
                    />
                    <Image src="/HowOrganizationWork/organization_line_desktop.svg"
                        className="hidden lg:block absolute right-4 -bottom-10 w-80 -z-10"
                        alt=""
                        width={208}
                        height={128}
                    />
                </span>

                <span> Влаштована? </span>

            </h2>
            <div className="my-2 max-w-xl lg:max-w-5xl">
                <p
                    className={`${inter.className} text-best-gray text-center text-xs md:text-lg`}
                >
                    За весь час існування в організації волонтерило близько 3 тисяч студентів!
                </p>
                <p
                    className={`${inter.className} mt-1.5 text-best-gray text-center text-xs md:text-lg`}
                >
                    Тільки уявіть: безліч поколінь провели свої студентські роки тут, працювали, веселились та творили
                    свій
                    BEST!
                </p>
            </div>
            <div className="relative">
                <Image
                    src="/HowOrganizationWork/corner mb.svg"
                    className="block lg:hidden absolute -top-12 -left-12"
                    alt="Декоративний куточок"
                    width={56}
                    height={56}
                />
                <Image
                    src="/HowOrganizationWork/left corner.svg"
                    className="hidden lg:block absolute -top-12 -left-12"
                    alt="Декоративний лівий куточок"
                    width={48}
                    height={48}
                />
                <Image
                    src="/HowOrganizationWork/right corner.svg"
                    className="hidden lg:block absolute -top-12 -right-12"
                    alt="Декоративний правий куточок"
                    width={48}
                    height={48}
                />

                <div className="w-full gap-2 grid grid-cols-12 grid-rows-[40vw_45vw_40vw] lg:grid-rows-[290px_290px]">
                    <div className="relative col-span-6 overflow-hidden rounded-2xl lg:col-span-3">
                        <Image
                            src="/HowOrganizationWork/o1.jpg"
                            className="w-full h-full object-cover"
                            alt=""
                            layout="fill"
                        />
                    </div>
                    <div className="relative col-span-6 overflow-hidden rounded-2xl lg:col-span-4">
                        <Image
                            src="/HowOrganizationWork/o2.png"
                            className="w-full h-full object-cover"
                            alt=""
                            layout="fill"
                        />
                    </div>
                    <div className="relative hidden overflow-hidden rounded-2xl lg:block lg:col-span-5">
                        <Image
                            src="/HowOrganizationWork/o3.jpg"
                            className="w-full h-full object-cover"
                            alt=""
                            layout="fill"
                        />
                    </div>
                    <div className="relative col-span-12 overflow-hidden rounded-2xl lg:col-span-5">
                        <Image
                            src="/HowOrganizationWork/o4.jpg"
                            className="w-full h-full object-cover"
                            alt=""
                            layout="fill"
                        />
                    </div>
                    <div className="relative col-span-6 overflow-hidden rounded-2xl lg:col-span-4">
                        <Image
                            src="/HowOrganizationWork/o5.jpg"
                            className="w-full h-full object-cover"
                            alt=""
                            layout="fill"
                        />
                    </div>
                    <Link href="/about-us"
                        className="relative col-span-6 overflow-hidden bg-[rgba(255,241,108,1)] rounded-2xl lg:col-span-3
                         transition duration-300 ease-in-out hover:scale-105">
                        <Image
                            src="/HowOrganizationWork/o6.svg"
                            className="w-full h-full object-cover"
                            alt=""
                            width={400}
                            height={400}
                        />
                        <p className={`${inter.className} hidden lg:block absolute top-3 leading-tight left-3 text-sm`}>
                            Допомогає<br />творити прогрес
                        </p>
                        <Image
                            src="/HowOrganizationWork/up%20right.svg"
                            className="absolute top-2 right-2 h-auto"
                            alt=""
                            width={35}
                            height={35}
                        />
                        <p className={`${maruipol_bold.className} absolute bottom-2 leading-tight left-2 lg:left-3 lg:bottom-4 text-[clamp(16px,calc(16px+44*(100vw-320px)/1024),40px)] lg:text-3xl`}>
                            Структура <br />BEST Lviv
                        </p>
                    </Link>
                </div>


            </div>


        </section>
    );
}
