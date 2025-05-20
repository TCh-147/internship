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
            <div className="py-2 after-arrow-symbol hover:cursor-pointer hover:text-blue-700 hover:underline">{moreInfo}</div>
            <hr className="text-gray-300"/>
        </>
    )
}

export default LoginArticle