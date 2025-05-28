'use client'

import { useTranslations } from "next-intl"

type Props = {
    title: string
    description: string
    moreInfo: string
}

const LoginArticle = ({title, description, moreInfo}: Props) => {

    const t = useTranslations('Login')

    return(
        <>
            <h2 className="py-3 text-xl hover:cursor-default">{t(title)}</h2>
            <p className="text-sm text-gray-600 hover:cursor-default">{t(description)}</p>
            <div className="py-2 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:text-blue-700 hover:underline">{t(moreInfo)}</div>
            <hr className="text-gray-300"/>
        </>
    )
}

export default LoginArticle