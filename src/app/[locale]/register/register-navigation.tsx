import Link from "next/link";
import { startTransition, useState } from "react";
import { helpDropDownFields } from "../../components/common/dropdown-fields";
import DropDownMenu from "../../components/common/drop-down-menu";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { redirect, useRouter } from "i18n/navigation";

export default function RegisterNav(){
    const [hidden, setHidden] = useState(true)
    const [active, setActive] = useState(false)

    const router = useRouter()
    const currentLocale = useLocale()
    const pathname = usePathname()
  
    function DropDown(){
      setHidden(false)
      setActive(true)
    }
  
    function LeftDropDown(){
      setHidden(true)
      setActive(false)
    }

    function LanguageSwitcher(){
        router.replace(
          pathname.replace(/^.(en|bg)/, ''), 
          {locale: currentLocale === "bg" ? "en" : "bg"})
    }

    const t = useTranslations('Register.Nav')

    return(
        <nav className="border-b-2 border-gray-300">
        <ul className="list-none grid w-full grid-cols-7 justify-between text-base">
          <li className="p-4">Logo</li>
          <li onClick={LanguageSwitcher} className="justify-self-center self-center p-4 hover:cursor-pointer hover:text-blue-700">{t('Language')}</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer hover:text-blue-700">{t('Site')}</li>
          <li className="justify-self-center self-center p-4 text-center hover:cursor-pointer hover:text-blue-700">{t('MobileApp')}</li>
          <li className="justify-self-center self-center p-4 text-center hover:cursor-pointer hover:text-blue-700">{t('ChangesInTariffs')}</li>
          <li onMouseLeave={LeftDropDown} onMouseEnter={DropDown} 
          className="justify-self-center self-center hover:cursor-pointer">
            <div className={`p-4 hover:text-blue-700 ${active ? "text-blue-700" : ""}`}>{t('Help')}</div>
            <div className={`${hidden ? "hidden" : "absolute bg-white border-1 border-gray-300 py-2"}`}>
              {
                helpDropDownFields.map(({title, section, line}) => 
                (
                  <DropDownMenu key={title} title={title} section={section} line={line} />
                ))
              }
            </div>
          </li>
          <li className="justify-self-center self-center p-2"><button className="p-2 px-4 uppercase text-sm bg-gray-200 hover:cursor-pointer hover:bg-blue-900 hover:text-white"><Link className="p-2 px-4" href="/">{t('Button')}</Link></button></li>
        </ul>
      </nav>
    )
}