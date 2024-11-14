import ValuesBoxes from "./ColorSquersValuesPages";
import Clr_Sqrs_pg from "./ColorSquersValuesPages";
import Image from "next/image";

export default function ValuesPage() {
  return (


    <div className="min-h-screen flex items-center w-full justify-center flex-col">
      <h1 className=" text-3xl lg:text-5xl lg:font-bold font-bold lg:mb-6 mb-8 text-center relative">
        <span className="text-black">Наші</span> <span className="text-best-blue">Цінності</span>
        <Image
          src="./deps.svg"
          width={292}
          height={102}
          className="w-24 lg:w-44 absolute top-6 -right-2 lg:-right-8 -z-10"
          alt=""
        />
      </h1>
      <Image
        src="./values.svg"
        width={42}
        height={48}
        className="w-6 lg:w-24 absolute top-56 right-4 lg:right-48 -z-10"
        alt=""
      />
      <Image
        src="./values.svg"
        width={42}
        height={48}
        className="w-6 lg:w-8 absolute lg:top-48 right-4 lg:left-24 -z-10 rotate-45"
        alt=""
      />
      <ValuesBoxes />
    </div>
  )
}