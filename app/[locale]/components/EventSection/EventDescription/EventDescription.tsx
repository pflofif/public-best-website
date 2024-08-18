
interface EventDescriptionProps {
    descColor: string,

    headingText: string,
    descriptionText: string,

    isInverted?: boolean    
}


import LinkLearnMore from "../../LinkLearnMore"
import EventLine from "./EventLine"

const EventDescription = ({ descColor: descColor, headingText: headingText, descriptionText: descriptionText }: EventDescriptionProps) => {
    return (
        <div className={`basis-[560px] flex max-lg:items-center flex-col order-1`}>
            <div className={"mb-6 max-lg:hidden"}>
                <EventLine lineColor={descColor}></EventLine>
            </div>
            <h4 className="text-3xl font-bold sm:mb-5 mb-2 sm:text-5xl max-lg:text-center">{headingText}</h4>
            <p className="text-lg min-lg:mb-16 mb-8 max-w-[459px] max-lg:text-center">{descriptionText}</p>

            <LinkLearnMore text={"Дізнатися більше"} href="#" btnColor={descColor} textColor="text-black"></LinkLearnMore>
        </div>
    )
}

export default EventDescription