"use client"
import { useTranslations } from "next-intl";
import Clr_Sqrs_full from "./components/ColorSquersValuesFull";
import ValuesPage from "./components/ColorSquersValuesFull";
import DepartmentsPage from "./components/ColorSquersDepartmentsPage";

export default function Home() {
  const t = useTranslations("Home");
  
  return (
    <main>
      <ValuesPage/>

    </main>
  )
}
