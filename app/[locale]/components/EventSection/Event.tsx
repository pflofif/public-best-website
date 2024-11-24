import { motion } from "framer-motion";

interface EventProps {
    sectionColor: string,
    imageName?: string,
    imageUrl?: string,
    isInverted?: boolean,
    heading: string,
    description: string,
    link: string
}

import EventImage from "./EventImage"
import EventDescription from "./EventDescription/EventDescription"
import { Colors } from "../LinkLearnMore";
const Event = ({ sectionColor: sectionColor, imageName: imageName, imageUrl: imageUrl, heading: heading, description: desc, isInverted: isInverted, link: link }: EventProps) => {
    const imageUrlPath = imageName !== undefined
        ? `/eventImages/${imageName}.png`
        : imageUrl!;


    const eventVariants = {
        hidden: { opacity: 0, y: 50 }, 
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="px-12 flex justify-evenly items-center flex-wrap min-lg:mb-[250px] mb-[100px] min-lg:gap-10 gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the component is visible
            variants={eventVariants}>
            <EventImage borderColor={sectionColor}
                imageUrl={imageUrlPath}
                isInverted={isInverted} />
            <EventDescription descriptionText={desc} headingText={heading} descColor={sectionColor} link={link}></EventDescription>
        </motion.div>
    )

}

export default Event