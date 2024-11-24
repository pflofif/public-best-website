interface EventImageProps {
    imageUrl: string,
    isInverted?: boolean
    borderColor: string,
}

import Image from "next/image"
const EventImage = ({ imageUrl: imageUrl, borderColor: borderColor, isInverted: isInverted }: EventImageProps) => {
    const colorClasses: { [key: string]: string } = {
        "best-blue": "#0F0BCB",
        "best-pink": "#EC9EFF",
        "best-orange": "#FFAF75",
        "best-green": "#77DD77",
        "best-yellow": "#FFF16C",
        "best-red": "#FF617E",
        "best-purple": "#EC9EFF"
    };
    const btnColorClass = colorClasses[borderColor];

    return (
        <div style={{ backgroundColor: btnColorClass }} className={`sm:px-[30px] sm:py-[33px] px-[19px] py-[19px] inline-block rounded-[20px] sm:rounded-[50px]  ${isInverted ? 'min-lg:order-2' : ''}`}>
            <img src={imageUrl} alt={"event Image"} width={652} height={378} className="rounded-[15px] sm:rounded-[24px]"></img>
        </div>
    )
}

export default EventImage