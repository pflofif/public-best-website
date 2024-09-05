import Boardies from "../components/Boardies";
import DepartmentsPage from "../components/DepartmentsAndIdentity/ColorSquersDepartmentsPage";
import RectangleBoard from "../components/ServicesAndBoard/RectangleBoard";

export default function Page() {
    return (
        <div>
            <RectangleBoard />
            {/* <Boardies /> */}
            <DepartmentsPage />
        </div>
    )
}