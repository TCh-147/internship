import { useTranslations } from "next-intl"

type Props = {
    title: string
}

const ModuleTopRow = ({title}: Props) => {
    const t = useTranslations('Dashboard.Modules')
    return(
        <>
            <div className="p-4">{t(title)}</div>
        </>
    )
}

export default ModuleTopRow