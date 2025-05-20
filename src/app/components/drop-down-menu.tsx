'use client'

import { useState } from "react"

type Props = {
    title: string
    section?: string
    line?: boolean
    dashboard?: boolean
}

const DropDownMenu = ({title, section, line, dashboard}: Props) => {
    const [hover, setHover] = useState("")
    function ItemEntered(){
        setHover(`text-blue-700 ${dashboard ? " hover:bg-[#ECEEF1]" : ""}`)
    }
    function ItemLeft(){
        setHover("text-black")
    }
    return(
        <>
            <h2 className="px-4 text-base uppercase text-[#808080]">{section}</h2>
            <div onMouseEnter={ItemEntered} onMouseLeave={ItemLeft} className={"py-2 px-6 " + hover}>
                {title}
            </div>
            <hr className={`${line ? "my-2 text-gray-300" : "hidden"}`}/>
        </>
    )
}

export default DropDownMenu