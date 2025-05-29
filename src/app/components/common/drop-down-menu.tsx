'use client'

import { useTranslations } from "next-intl"
import { iconMap } from "../icons"
import { useState } from "react"

type Props = {
    title: string
    section?: string
    line?: boolean
    dashboard?: boolean
    icon?: string
}

const DropDownMenu = ({title, section, line, icon}: Props) => {
    const [hover, setHover] = useState(false)
    const t = useTranslations('DropDown')
    const IconComponent = iconMap[icon ? icon : '']

    return(
        <>
            <h2 className="px-4 text-base uppercase text-[#808080]">{section ? t(section) : ""}</h2>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={"flex items-center py-2 px-6 text-base hover:text-blue-700 hover:bg-[#ECEEF1]"}>
                {IconComponent && <IconComponent className={`w-4 mr-2 ${hover ? "text-blue-600" : "text-[#4a5568]"}`}/>}{t(title)}
            </div>
            <hr className={`${line ? "my-2 text-gray-300" : "hidden"}`}/>
        </>
    )
}

export default DropDownMenu