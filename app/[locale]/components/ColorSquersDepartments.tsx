import ColorfulSquare from "./ColorSquersValues";

export default function DepartmentsBoxes () {
    return (
        <div className="lg:flex lg:gap-4 flex flex-wrap justify-center gap-4 mt-[75px]">
            <ColorfulSquare emoji="🎤" color="bg-best-orange" text="Public Relations" test="" />
            <ColorfulSquare emoji="🎨" color="bg-best-pink" text="Design" test="" />
            <ColorfulSquare emoji="🫂" color="bg-best-yellow" text="Human Recourses" test="" />
            <ColorfulSquare emoji="🖥️" color="bg-best-green" text="Information Technologies" test="" />
            <ColorfulSquare emoji="💸" color="bg-best-blue" text="Fundraising" test="text-white" />
        </div>
    )
}