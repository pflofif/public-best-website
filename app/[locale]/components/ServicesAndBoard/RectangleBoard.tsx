import BoardTitle from "../BoardTitle";
import RectangleWithEmoji from "./RectangleBoardService";

export default function RectangleBoard() {
  return (
   <section>
      <BoardTitle></BoardTitle>
      <div className="flex items-center justify-center ">
        
        <div className="flex flex-wrap justify-center gap-2 mt-10 lg:mt-20">
          <RectangleWithEmoji text="Обирається терміном на один рік" emoji="✅" />
          <RectangleWithEmoji text="Приймає основні стратегічні рішення" emoji="🎯" />
          <RectangleWithEmoji text="Представляє BEST Lviv" emoji="🦁" />
        </div>
      </div>
   </section>
  
  )
}