interface EventImageProps {
    imageUrl: string,
    isInverted?: boolean
    borderColor: string,
}

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
        <div style={{ backgroundColor: btnColorClass }} className={`md:px-[32px] md:py-[32px] px-[18px] py-[18px] inline-block rounded-[20px]  ${isInverted ? 'min-lg:order-2' : ''}`}>
            <img src={imageUrl} alt={"event Image"} width={648} height={378} className="rounded-[12px] md:rounded-[20px]"></img>
        </div>
    )
}

export default EventImage