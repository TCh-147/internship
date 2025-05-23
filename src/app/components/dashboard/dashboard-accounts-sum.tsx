'use client'

type Props = {
    title: string
    sum: number
    currency: string
}

const Accounts = ({title, sum, currency}: Props) => {
    return(
        <>
            <div className="m-4 p-4 text-center bg-gray-100">
                <p>{title}</p>
                <p className="text-blue-600 text-2xl font-bold">{sum} {currency}</p>
            </div>
        </>
    )
} 

export default Accounts