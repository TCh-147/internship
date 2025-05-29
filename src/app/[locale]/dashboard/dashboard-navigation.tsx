import DropDownMenu from "app/components/common/drop-down-menu"
import { settingsDashboardNavFields } from "app/components/common/dropdown-fields"
import LogoutIcon from "app/components/icons/logout"
import MessagesIcon from "app/components/icons/messages"
import NotificationsIcon from "app/components/icons/notifications"
import SettingsIcon from "app/components/icons/settings"
import UserIcon from "app/components/icons/user"
import { usePathname, useRouter } from "i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import { useState } from "react"

export default function DashboardNav(){
    const t = useTranslations('Dashboard.Nav')
    const [hidden, setHidden] = useState(true)
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState("")

    const router = useRouter()
    const currentLocale = useLocale()
    const pathname = usePathname()
    
    function DropDown(){
        setHidden(false)
        setActive(true)
        setHover("settings")
    }
    
    function LeftDropDown(){
        setHidden(true)
        setActive(false)
        setHover("")
    }

    function LanguageSwitcher(){
        router.replace(
          pathname.replace(/^.(en|bg)/, ''), 
          {locale: currentLocale === "bg" ? "en" : "bg"})
    }
      
    return(
        <nav className="bg-white border-b-1 border-gray-300">
            <ul className="list-style-none flex justify-end p-4">
                <li className="-8 ml-0 mr-auto hover: cursor-default">Logo</li>
                <li onClick={LanguageSwitcher} className="flex items-center px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">{t('language')}</li>
                <li onMouseEnter={() => setHover("messages")} onMouseLeave={() => setHover("")} className="flex items-center px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700"><MessagesIcon className={`w-4.5 mr-2 ${hover === "messages" ? "fill-blue-600" : "fill-[#4a5568]"}`}/>{t('messages')}</li>
                <li onMouseEnter={() => setHover("notifications")} onMouseLeave={() => setHover("")} className="flex items-center px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700"><NotificationsIcon className={`w-4 mr-2 ${hover === "notifications" ? "fill-blue-600" : "fill-[#4a5568]"}`}/>{t('notifications')}</li>
                <li onMouseLeave={LeftDropDown} onMouseEnter={DropDown} 
                className="px-8 text-sm hover:cursor-pointer">
                    <div className={`p-2 flex items-center uppercase hover:text-blue-700 ${active ? "text-blue-700" : ""}`}><SettingsIcon className={`w-4 mr-2 ${hover === "settings" ? "fill-blue-600" : "fill-[#4a5568]"}`}/>{t('settings')}</div>
                    <div className={`${hidden ? "hidden" : "absolute bg-white border-1 border-gray-300 py-2"}`}>
                        {
                            settingsDashboardNavFields.map(({title, section, line}) => (
                                <DropDownMenu key={title} title={title} section={section} line={line} />
                            )) 
                        }
                    </div>
                </li>
                <li onMouseEnter={() => setHover("user")} onMouseLeave={() => setHover("")} className="flex items-center border-l-1 border-gray-300 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700"><UserIcon className={`w-5 mr-2 ${hover === "user" ? "fill-blue-600" : "fill-[#4a5568]"}`}/>{t('profile')}</li>
                <li onMouseEnter={() => setHover("exit")} onMouseLeave={() => setHover("")} className="flex items-center border-l-1 border-gray-300 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700"><LogoutIcon className={`w-5 mr-2 ${hover === "exit" ? "fill-blue-600" : "fill-[#4a5568]"}`}/>{t('logout')}</li>
            </ul>
        </nav>
    )
}