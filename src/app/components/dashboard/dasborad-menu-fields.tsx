'use client'

import { useState } from "react"
import DropDownMenu from "../common/drop-down-menu"
import { IDropDownFieldConfig} from "../common/dropdown-fields"

type Props = {
    title: string
    dropDown?: boolean
    dropDownFields?: IDropDownFieldConfig[]
}

const SideMenu = ({title, dropDown, dropDownFields}: Props) => {
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
                    <div className={`px-4 hover:text-blue-700 ${dropDown ? "after:absolute after:right-0 after:content-['>'] after:pr-4 after:align-center " : ""} ${active ? " text-blue-700" : ""}`}>{title}</div>
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