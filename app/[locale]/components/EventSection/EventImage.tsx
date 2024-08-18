interface EventImageProps {
    imageUrl: string,
    isInverted?: boolean
    borderColor: string,

}
import Image from "next/image"
const EventImage = ({ imageUrl: imageUrl, borderColor: borderColor, isInverted: isInverted}: EventImageProps) => {

    return (
        <div style={{ backgroundColor: borderColor }} className={`sm:px-[30px] sm:py-[33px] px-[10px] py-[13px] inline-block sm:rounded-[50px] rounded-[20px] ${isInverted ? 'min-lg:order-2' : ''}`}>
            <Image src={imageUrl} alt={"event Image"} width={652} height={378}></Image>
        </div>
    )
}

export default EventImage