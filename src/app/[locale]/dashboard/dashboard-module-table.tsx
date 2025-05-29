import { useTranslations } from "next-intl"

type Props = {
    column: string
    checkbox?: boolean
}

const ModuleTopRow = ({column, checkbox}: Props) => {
    const t = useTranslations('Dashboard.Modules')
    return(
        <>
            <div><input className={`${checkbox ? "mr-2 hover:cursor-pointer" : "hidden"}`} type="checkbox"/>{t(column)}</div>
        </>
    )
}

export default ModuleTopRow