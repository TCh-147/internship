'use client'

type Props = {
    title: string
    description: string
    moreInfo: string
}

const LoginArticle = ({title, description, moreInfo}: Props) => {
    return(
        <>
            <h2 className="py-3 text-xl hover:cursor-default">{title}</h2>
            <p className="text-sm text-gray-600 hover:cursor-default">{description}</p>
            <p className="py-2 after-arrow-symbol hover:cursor-pointer">{moreInfo}</p>
            <hr className="text-gray-300"/>
        </>
    )
}

export default LoginArticle