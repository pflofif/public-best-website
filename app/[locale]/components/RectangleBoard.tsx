import RectangleWithEmoji from "./RectangleBoardService";

export default function RectangleBoard(){
    return(
        <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-wrap justify-center gap-2 ">
        <RectangleWithEmoji text="Обирається терміном на один рік" emoji="✅" />
        <RectangleWithEmoji text="Приймає основні стратегічні рішення" emoji="🎯" />
        <RectangleWithEmoji text="Представляє BEST Lviv" emoji="🦁" />
      </div>
    </div>
    )
}