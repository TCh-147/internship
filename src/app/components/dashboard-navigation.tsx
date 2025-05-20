import { useState } from "react"
import DropDownMenu from "./drop-down-menu"
import { settingsDashboard } from "./fields/dropdown-fields"

export default function DashboardNav(){
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
        <nav className="bg-white border-b-1 border-gray-300">
            <ul className="list-style-none flex justify-end">
                <li className="p-4 px-8 ml-0 mr-auto hover: cursor-default">Logo</li>
                <li className="p-4 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">English</li>
                <li className="p-4 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">Съобщения</li>
                <li className="p-4 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">Известия</li>
                <li onMouseLeave={LeftDropDown} onMouseEnter={DropDown} 
                className="px-8 text-sm hover:cursor-pointer">
                    <div className={`p-4 uppercase hover:text-blue-700 ${active ? "text-blue-700" : ""}`}>Настройки</div>
                    <div className={`${hidden ? "hidden" : "absolute bg-white border-1 border-gray-300 py-2"}`}>
                        {
                            settingsDashboard.map(({title, section, line}) => (
                                <DropDownMenu key={title} title={title} section={section} line={line} />
                            ))
                        }
                    </div>
                </li>
                <li className="border-l-1 border-gray-300 p-4 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">Профил</li>
                <li className="border-l-1 border-gray-300 p-4 px-8 text-sm uppercase hover:cursor-pointer hover:text-blue-700">Изход</li>
            </ul>
        </nav>
    )
}