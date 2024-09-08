interface EventProps {
    sectionColor: string,
    imageName?: string,
    Base64Image?: string,
    isInverted?: boolean,
    heading: string,
    description: string
}

import EventImage from "./EventImage"
import EventDescription from "./EventDescription/EventDescription"
import { Colors } from "../LinkLearnMore";
const Event = ({ sectionColor: sectionColor, imageName: imageName, Base64Image: Base64Image, heading: heading, description: desc, isInverted: isInverted }: EventProps) => {
    const imageUrl = imageName !== undefined
        ? `/eventImages/${imageName}.png`
        : Base64Image!;

    return (
        <div className="px-12 flex justify-evenly items-center flex-wrap min-lg:mb-[250px] mb-[100px] min-lg:gap-10 gap-7">
            <EventImage borderColor={sectionColor}
                imageUrl={imageUrl}
                isInverted={isInverted} />
            <EventDescription descriptionText={desc} headingText={heading} descColor={sectionColor} ></EventDescription>
        </div>
    )

}

export default Event