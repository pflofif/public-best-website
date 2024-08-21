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
        <div style={{ backgroundColor: btnColorClass }} className={`sm:px-[30px] sm:py-[33px] px-[10px] py-[13px] inline-block sm:rounded-[50px] rounded-[20px] ${isInverted ? 'min-lg:order-2' : ''}`}>
            <Image src={imageUrl} alt={"event Image"} width={652} height={378}></Image>
        </div>
    )
}

export default EventImage