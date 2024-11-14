import ColorfulSquare from "./ColorSquersValues";

export default function DepartmentsBoxes() {
    return (
        <div className="lg:flex lg:gap-4 flex flex-wrap justify-center gap-4 mt-[75px]">
            <ColorfulSquare emojiUri="/Departments/PR.svg" bgColor="bg-best-orange" text="Public Relations" textColor="" />
            <ColorfulSquare emojiUri="/Departments/DS.svg" bgColor="bg-best-pink" text="Design" textColor="" />
            <ColorfulSquare emojiUri="/Departments/HR.svg" bgColor="bg-best-yellow" text="Human Recourses" textColor="" />
            <ColorfulSquare emojiUri="/Departments/IT.svg" bgColor="bg-best-green" text="Information Technologies" textColor="" />
            <ColorfulSquare emojiUri="/Departments/FR.svg" bgColor="bg-best-ultra-light-blue" text="Fundraising" textColor="text-white" />
        </div>
    )
}