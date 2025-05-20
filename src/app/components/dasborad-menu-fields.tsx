'use client'

import { useState } from "react"
import DropDownMenu from "./drop-down-menu"
import { IDropDownFieldConfig} from "./fields/dropdown-fields"

type Props = {
    title: string
    dropDown?: boolean
    dropDownFields?: IDropDownFieldConfig[]
}

const MenuFields = ({title, dropDown, dropDownFields}: Props) => {
    const [hidden, setHidden] = useState(true)
    const [active, setActive] = useState(false) 

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
                className="relative px-4 py-2 text-[12pt] hover:cursor-pointer hover:bg-[#ECEEF1]">
                    <div className={`px-4 hover:text-blue-700 ${dropDown ? " after-arrow-symbol-absolute " : ""} ${active ? " text-blue-700" : ""}`}>{title}</div>
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

export default MenuFields