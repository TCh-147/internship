import DropDownMenu from "app/components/common/drop-down-menu"
import { settingsDashboardNavFields } from "app/components/common/dropdown-fields"
import { usePathname, useRouter } from "i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import { useState } from "react"

export default function DashboardNav(){
    const t = useTranslations('Dashboard.Nav')
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
      
    return(
        <nav className="bg-white border-b-1 border-gray-300">
            <ul className="list-style-none flex justify-end">
                <li className="p-4 px-8 ml-0 mr-auto hover: cursor-default">Logo</li>
                <li onClick={LanguageSwitcher} className="p-4 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">{t('language')}</li>
                <li className="p-4 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">{t('messages')}</li>
                <li className="p-4 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">{t('notifications')}</li>
                <li onMouseLeave={LeftDropDown} onMouseEnter={DropDown} 
                className="px-8 text-sm hover:cursor-pointer">
                    <div className={`p-4 uppercase hover:text-blue-700 ${active ? "text-blue-700" : ""}`}>{t('settings')}</div>
                    <div className={`${hidden ? "hidden" : "absolute bg-white border-1 border-gray-300 py-2"}`}>
                        {
                            settingsDashboardNavFields.map(({title, section, line}) => (
                                <DropDownMenu key={title} title={title} section={section} line={line} />
                            )) 
                        }
                    </div>
                </li>
                <li className="border-l-1 border-gray-300 p-4 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">{t('profile')}</li>
                <li className="border-l-1 border-gray-300 p-4 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">{t('logout')}</li>
            </ul>
        </nav>
    )
}