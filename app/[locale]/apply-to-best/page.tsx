"use client"
import { useEffect, useState } from "react";
import FailedMessage from "../components/FailedMessage";
import { maruipol_bold, inter } from "../../fonts/fonts";
import Image from "next/image";
import LinkLearnMore from "../components/LinkLearnMore";

type RegistrationType = {
    isActive: boolean;
    urlToForm: string;
};

export default function Page() {
    const [registration, setRegistration] = useState<RegistrationType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/registration')
            .then((response) => response.json())
            .then((data) => {
                setRegistration(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching registration:', error);
                setLoading(true);
            });
    }, []);


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            </div>
        );
    }

    if (registration?.isActive === false) {
        return (
            <FailedMessage headerText="Упс... 😢" text="На жаль, поки набір у нашу організацію не відкритий! 
    Ти маєш можливість потрапити до нас двічі на рік: влітку та восени! <br /><br /> Слідкуй за нашими соцмережами та чекай відкриття реєстрацій. Поки бери участь у наших подіях, адже вони доступні кожному!" />
        )
    }

    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-7xl w-full px-6 mx-auto my-48">
            <h2
                className={`${maruipol_bold.className} text-black text-4xl lg:text-5xl my-2 text-center`}
            >
                Привіт, <span className="text-best-blue">Студенте</span>! 👋
            </h2>
            <p className={`${inter.className} text-center text-md lg:text-lg mt-4`}>
                Шукав місце де ти хочеш розвинутись та круто провести свої студентські
                роки? <br />
                Ось це твій шанс!
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-between mt-10 w-full">
                <div className="bg-white shadow-lg rounded-lg p-8 min-h-[475px]">
                    <h1 className={`${maruipol_bold.className} text-4xl mb-4 text-center`}>Якщо ти:</h1>
                    <ul className={`${inter.className} space-y-2 text-md`}>
                        <li>• Студент або аспірант до 28 років</li>
                        <li>• Навчаєшся у НУ “Львівська Політехніка”</li>
                        <li>• Хочеш прокачати своє життя на максимум</li>
                    </ul>
                    <div className="mt-36">
                        <LinkLearnMore
                            text="Зареєструватись"
                            href={registration?.urlToForm ?? ""}
                            btnColor="best-yellow"
                            textColor="best-blue"
                        />
                    </div>
                </div>

                <div className="max-w-[958px] max-h-[516px] shadow-none">
                    <Image
                        src="/RegistrationPhoto.jpg"
                        alt="Registration group photo"
                        width={958}
                        height={516}
                        layout="responsive"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}

