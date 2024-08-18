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
    
    return (
        <div className="flex justify-evenly items-center flex-wrap min-lg:mb-[250px] mb-[100px] min-lg:gap-10 gap-7">
            <EventImage borderColor={sectionColor} imageUrl={`/eventImages/${imageName}.png `} isInverted={isInverted}  />
            <EventDescription descriptionText={desc} headingText={heading} descColor={sectionColor} ></EventDescription>
           
        </div>
    )

}

export default Event