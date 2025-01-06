
interface EventDescriptionProps {
    descColor: string,

    headingText: string,
    descriptionText: string,

    isInverted?: boolean,

    link: string
}


import { link } from "fs"
import LinkLearnMore, { Colors } from "../../LinkLearnMore"
import EventLine from "./EventLine"

const EventDescription = ({ descColor: descColor, headingText: headingText, descriptionText: descriptionText, link: link }: EventDescriptionProps) => {
    const textColor = headingText === 'Інженерний Ярмарок Кар’єри'
        ? "text-white" : "text-black";

    return (
        <div className={`basis-[560px] flex max-lg:items-center flex-col order-1`}>
            <div className={"mb-6 max-lg:hidden"}>
                <EventLine lineColor={descColor}></EventLine>
            </div>
            <h4 className="text-xl font-bold sm:mb-5 mb-2 sm:text-5xl max-lg:text-center">{headingText}</h4>
            <p className="text-paragraphMobile md:text-paragraphDesktop min-lg:mb-16 mb-8 max-w-[459px] max-lg:text-center">{descriptionText}</p>

            <LinkLearnMore text={"Дізнатися більше"} href={link} btnColor={descColor}
                textColor={textColor}></LinkLearnMore>
        </div>
    )
}

export default EventDescription