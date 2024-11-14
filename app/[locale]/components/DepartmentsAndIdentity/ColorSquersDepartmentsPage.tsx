import DepartmentsBoxes from "./ColorSquersDepartments";
import Image from "next/image";
import { maruipol_bold, inter } from "../../../fonts/fonts";

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen flex items-center w-full justify-center flex-col p-6 lg:p-0 relative">
      
        
      <h2 className=" text-3xl lg:text-5xl lg:font-bold font-bold lg:mb-6 mb-8 text-center relative">
      
        <span className="text-black">Наші</span>{" "}
        <span className="text-best-blue">Відділи</span>
        <Image
          src="/deps.svg"
          width={292}
          height={102}
          className="w-24 lg:w-44 absolute top-6 -right-2 lg:-right-8 -z-10"
          alt=""
        />
      </h2>

      <p
        className={`${inter.className} text-center text-sm lg:text-base lg:mb-2 lg:pt-8 max-w-screen-md w-[328px] lg:w-[884px]`}
      >
        Для того аби люди могли розвиватись, здобувати нові скіли та рости
        необхідна комплексна система, яка буде навчати у різних сферах. <br />
        Саме для такого в BESTі існують департаменти, у кожному з яких ми можемо
        розвиватись.
      </p>
      <DepartmentsBoxes />
    </div>
  );
}
