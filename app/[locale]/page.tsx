"use client"
import { useTranslations } from "next-intl";
import Clr_Sqrs_full from "./components/Clr_Sqrs_full";

export default function Home() {
  const t = useTranslations("Home");
  
  return (
    <main>
      
    <Clr_Sqrs_full></Clr_Sqrs_full>
    </main>
  )
}
