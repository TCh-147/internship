import Link from "next/link";
import { useState } from "react";
import { helpDropDownFields } from "../../components/common/dropdown-fields";
import DropDownMenu from "../../components/common/drop-down-menu";
import { useLocale, useTranslations } from "next-intl";
import MonitorIcon from "app/components/icons/monitor";
import AppleIcon from "app/components/icons/apple";
import AndroidIcon from "app/components/icons/android";
import ListClipboardIcon from "app/components/icons/list-clipboard";
import InformationIcon from "app/components/icons/information";

export default function LoginNav(){
  const [hidden, setHidden] = useState(true)
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState("")
  const currentLocale = useLocale()

  function DropDown(){
    setHidden(false)
    setActive(true)
    setHover("help")
  }

  function LeftDropDown(){
    setHidden(true)
    setActive(false)
    setHover("")
  }

  const t = useTranslations('Login.Nav')

    return(
        <nav className="border-b-2 border-gray-300">
        <ul className="list-none grid w-full grid-cols-7 justify-between text-base">
          <li className="p-2">Logo</li>
          <li className="justify-self-center self-center p-2 hover:cursor-pointer hover:text-blue-700"><Link href={`/${currentLocale === "bg" ? "en" : "bg"}`}>{t('Language')}</Link></li>
          <li onMouseEnter={() => setHover("site")} onMouseLeave={() => setHover("")} className="flex items-center justify-self-center self-center p-2 hover:cursor-pointer hover:text-blue-700"><MonitorIcon className={`w-5 mr-2 ${hover === "site" ? "fill-blue-600" : "fill-[#4a5568]"}`}/>{t('Site')}</li>
          <li onMouseEnter={() => setHover("app")} onMouseLeave={() => setHover("")} className="flex items-center justify-self-center self-center p-2 text-center hover:cursor-pointer hover:text-blue-700"><AppleIcon className={`w-5 ${hover === "app" ? "fill-blue-600" : "fill-[#4a5568]"}`}/><AndroidIcon className={`w-5 mr-2 ${hover === "app" ? "fill-blue-600" : "fill-[#4a5568]"}`}/>{t('MobileApp')}</li>
          <li onMouseEnter={() => setHover("list")} onMouseLeave={() => setHover("")} className="flex items-center justify-self-center self-center p-2 text-center hover:cursor-pointer hover:text-blue-700"><ListClipboardIcon className={`w-4 mr-2 ${hover === "list" ? "text-blue-600" : "text-[#4a5568]"}`}/>{t('ChangesInTariffs')}</li>
          <li onMouseLeave={LeftDropDown} onMouseEnter={DropDown} 
          className="justify-self-center self-center hover:cursor-pointer">
            <div className={`flex items-center p-2 hover:text-blue-700 ${active ? "text-blue-700" : ""}`}><InformationIcon className={`w-5 mr-2 ${hover === "help" ? "fill-blue-600" : "fill-[#4a5568]"}`}/>{t('Help')}</div>
            <div className={`${hidden ? "hidden" : "absolute bg-white border-1 border-gray-300 py-2"}`}>
              {
                helpDropDownFields.map(({title, section, line, icon}) => (
                  <DropDownMenu key={title} title={title} section={section} line={line} icon={icon}/>
                ))
              }
            </div>
          </li>
          <li className="justify-self-center self-center p-2"><button className="p-2 px-4 uppercase text-sm bg-gray-200 hover:cursor-pointer hover:bg-blue-900 hover:text-white"><Link className="p-2 px-4" href="/register">{t('Button')}</Link></button></li>
        </ul>
      </nav>
    )
}