interface EventProps {
    sectionColor: string,
    imageName: string,
    isInverted?: boolean,
    heading: string,
    description: string
}

import EventImage from "./EventImage"
import EventDescription from "./EventDescription/EventDescription"
const Event = ({ sectionColor: sectionColor, imageName: imageName, heading: heading, description: desc, isInverted: isInverted }: EventProps) => {
    const colorClasses: { [key: string]: string } = {
        "best-blue": "#0F0BCB",
        "best-pink": "#EC9EFF",
        "best-orange": "#FFAF75",
        "best-green": "#77DD77",
        "best-yellow": "#FFF16C",
        "best-red": "#FF617E",
        "best-purple": "#EC9EFF"
    };
    const btnColorClass = colorClasses[sectionColor];
    return (
        <div className="flex justify-evenly items-center flex-wrap min-lg:mb-[250px] mb-[100px] min-lg:gap-10 gap-7">
            <EventImage borderColor={btnColorClass} imageUrl={`/eventImages/${imageName}.png `} isInverted={isInverted}  />
            <EventDescription descriptionText={desc} headingText={heading} descColor={btnColorClass} ></EventDescription>
           
        </div>
    )

}

export default Event