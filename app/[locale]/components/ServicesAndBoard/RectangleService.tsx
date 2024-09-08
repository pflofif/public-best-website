import RectangleWithEmoji from "./RectangleBoardService";

export default function RectangleService() {
  return (
    <div className="lg:flex lg:gap-4 flex flex-wrap justify-center gap-4 mt-[75px]">
      <RectangleWithEmoji text="Кар’єрна підтримка" emojiUri="/Services/CarrerSupport.svg" />
      <RectangleWithEmoji text="Залученість у навчання" emojiUri="/Services/EI.svg" />
      <RectangleWithEmoji text="Додаткова освіта" emojiUri="/Services/AdditionalStude.svg" />
    </div>
  )
}