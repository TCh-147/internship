'use client'

import DropDownMenu from "app/components/common/drop-down-menu"
import { IDropDownFieldConfig } from "app/components/common/dropdown-fields"
import { iconMap } from "app/components/icons"
import { useTranslations } from "next-intl"
import { useState } from "react"

type Props = {
    title: string
    dropDown?: boolean
    dropDownFields?: IDropDownFieldConfig[]
    icon?: string
}

const SideMenu = ({title, dropDown, dropDownFields, icon}: Props) => {
    const t = useTranslations('Dashboard.Menu.SideMenu')
    const [hidden, setHidden] = useState(true)
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(false)
    const IconComponent = iconMap[icon ?? ''] 

    function DropDown(){
        setHidden(false)
        setActive(true)
    }

    function LeftDropDown(){
        setHidden(true)
        setActive(false)
    }
    return(
        <>
            <ul>
                <li onMouseLeave={dropDown ? LeftDropDown : undefined} onMouseEnter={dropDown ? DropDown : undefined} 
                className="relative px-2 py-2 text-[12pt] hover:cursor-pointer hover:bg-[#ECEEF1]">
                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`flex items-center px-4 hover:text-blue-700 ${dropDown ? "after:absolute after:right-0 after:content-['>'] after:pr-4 after:align-center " : ""} ${active ? " text-blue-700" : ""}`}>
                        {IconComponent && <IconComponent className={`${icon === "utilities" ? "h-6" : ""} w-6 mr-4 ${hover ? "text-blue-600" : "text-[#4a5568]"}`}/>}
                        {t(title)}
                    </div>
                    <div 
                    className={`${dropDown ? 
                    `${hidden ? 
                        "hidden" : "absolute w-full top-0 -end-full bg-white border-1 border-gray-300 py-2"}` 
                    : "hidden"}`}>
                        {
                            dropDownFields?.map(({title, section, line}) => (
                                <DropDownMenu key={title} title={title} section={section} line={line}/>
                            ))
                        }
                    </div>
                </li>
                
            </ul>        
        </>
    )
}

export default SideMenu