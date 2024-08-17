import ColorfulSquare from "./ColorSquersValues";

export default function ValuesBoxes() {
    return (
        <div className="lg:flex lg:gap-4 flex flex-wrap justify-center gap-4 mt-[75px]">
            <ColorfulSquare emoji="💫" color="bg-best-pink" text="Flexibility" test="" />
            <ColorfulSquare emoji="🤝" color="bg-best-orange" text="Friendship" test="" />
            <ColorfulSquare emoji="🎯" color="bg-best-blue" text="Improvement" test="text-white" />
            <ColorfulSquare emoji="📚" color="bg-best-green" text="Open-Mindedness" test="" />
            <ColorfulSquare emoji="🤪" color="bg-best-yellow" text="Fun" test="" />
        </div>
    )
}