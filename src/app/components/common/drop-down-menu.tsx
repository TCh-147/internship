'use client'

type Props = {
    title: string
    section?: string
    line?: boolean
    dashboard?: boolean
}

const DropDownMenu = ({title, section, line}: Props) => {
    return(
        <>
            <h2 className="px-4 text-base uppercase text-[#808080]">{section}</h2>
            <div className={"py-2 px-6 hover:text-blue-700 hover:bg-[#ECEEF1]"}>
                {title}
            </div>
            <hr className={`${line ? "my-2 text-gray-300" : "hidden"}`}/>
        </>
    )
}

export default DropDownMenu