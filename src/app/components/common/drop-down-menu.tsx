'use client'

import { useTranslations } from "next-intl"

type Props = {
    title: string
    section?: string
    line?: boolean
    dashboard?: boolean
}

const DropDownMenu = ({title, section, line}: Props) => {

    const t = useTranslations('DropDown')

    return(
        <>
            <h2 className="px-4 text-base uppercase text-[#808080]">{section ? t(section) : ""}</h2>
            <div className={"py-2 px-6 text-base hover:text-blue-700 hover:bg-[#ECEEF1]"}>
                {t(title)}
            </div>
            <hr className={`${line ? "my-2 text-gray-300" : "hidden"}`}/>
        </>
    )
}

export default DropDownMenu