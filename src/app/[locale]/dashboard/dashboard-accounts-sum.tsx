'use client'

import { useTranslations } from "next-intl"

type Props = {
    title: string
    sum: string
    currency: string
}

const Accounts = ({title, sum, currency}: Props) => {
    const t = useTranslations('Dashboard.AccountsSum')

    return(
        <>
            <div className="m-4 p-4 text-center bg-gray-100">
                <p>{t(title)}</p>
                <p className="text-blue-600 text-2xl font-bold">{t(sum)} {t(currency)}</p>
            </div>
        </>
    )
} 

export default Accounts