import { iconMap } from "app/components/icons"
import { useTranslations } from "next-intl"
import { useState } from "react"

type Props = {
    title: string
}

export default function ModulesTopRow({title}: Props){
    const t = useTranslations('Dashboard.Modules')
    const IconComponent = iconMap['settings']
    const [hover, setHover] = useState("") 
    return(
        <>
            <div className="flex flex-row border-1 border-gray-300">
                <div className="p-2 uppercase font-bold border-gray-300">{t(title)}</div>
                <div className="mr-0 ml-auto flex flex-row">
                    <div className="p-2 border-l-1 border-r-1 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:text-blue-600">{t('moreInfo')}</div>
                    <div onMouseEnter={() => setHover("settings")} onMouseLeave={() => setHover("")} className="p-2 hover:cursor-pointer"><IconComponent className={`w-6 ${hover === "settings" ? "fill-blue-600" : "fill-[#4a5568]"}`}/></div>
                </div>
            </div>
        </>
    )
}