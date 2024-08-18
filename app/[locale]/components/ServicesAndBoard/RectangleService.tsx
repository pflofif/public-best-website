import RectangleWithEmoji from "./RectangleBoardService";

export default function RectangleService(){
    return(
        <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-wrap justify-center gap-2 ">
        <RectangleWithEmoji text="Кар’єрна підтримка" emoji="💼" />
        <RectangleWithEmoji text="Залученість у навчання" emoji="📝" />
        <RectangleWithEmoji text="Додаткова освіта" emoji="👩‍🎓" />
      </div>
    </div>
    )
}