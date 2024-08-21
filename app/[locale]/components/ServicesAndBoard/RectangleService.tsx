import RectangleWithEmoji from "./RectangleBoardService";

export default function RectangleService() {
  return (
    <div className="lg:flex lg:gap-4 flex flex-wrap justify-center gap-4 mt-[75px]">
      <RectangleWithEmoji text="Кар’єрна підтримка" emoji="💼" />
      <RectangleWithEmoji text="Залученість у навчання" emoji="📝" />
      <RectangleWithEmoji text="Додаткова освіта" emoji="👩‍🎓" />
    </div>
  )
}