import BoardTitle from "../BoardTitle";
import RectangleWithEmoji from "./RectangleBoardService";

export default function RectangleBoard() {
  return (
   <section className="pt-48">
      <BoardTitle></BoardTitle>
      <div className="flex items-center justify-center ">
        
        <div className="flex flex-wrap justify-center gap-2 mt-10 lg:mt-20">
          <RectangleWithEmoji text="Обирається терміном на &nbsp; один рік" emojiUri="/BoardEmojis/duration.svg" />
          <RectangleWithEmoji text="Приймає основні стратегічні рішення" emojiUri="/BoardEmojis/strategic.svg" />
          <RectangleWithEmoji text="Представляє BEST Lviv" emojiUri="/BoardEmojis/maskot.svg" />
        </div>
      </div>
   </section>
  
  )
}