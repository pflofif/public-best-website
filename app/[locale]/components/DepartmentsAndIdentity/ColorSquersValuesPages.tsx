import ColorfulSquare from "./ColorSquersValues";

export default function ValuesBoxes() {
    return (
        <div className="lg:flex lg:gap-4 flex flex-wrap justify-center gap-4 mt-4 md:mt-12">
            <ColorfulSquare emojiUri="/OurValues/flexibility.svg" bgColor="bg-best-pink" text="Flexibility" textColor="" />
            <ColorfulSquare emojiUri="/OurValues/friendship.svg" bgColor="bg-best-orange" text="Friendship" textColor="" />
            <ColorfulSquare emojiUri="/OurValues/improvement.svg" bgColor="bg-best-ultra-light-blue" text="Improvement" textColor="text-white" />
            <ColorfulSquare emojiUri="/OurValues/OM.svg" bgColor="bg-best-green" text="Open-Mindedness" textColor="" />
            <ColorfulSquare emojiUri="/OurValues/fun.svg" bgColor="bg-best-yellow" text="Fun" textColor="" />
        </div>
    )
}