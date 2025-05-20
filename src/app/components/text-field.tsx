'use client'

type Props = {
    register: any
    errors: any
    label: string
    fieldName: string
    type: string
    required?: boolean
}

const TextField = ({ register, errors, label, fieldName, type, required }: Props) => {
    return (
        <>
            <label className={`my-2 px-2 text-base ${required ? "before-red-star" : ""}`}>
                {label}
            </label>
            <div>
                <input
                    {...register(fieldName, { required })}
                    type={type}
                    className="my-2 p-1 w-full border-2 rounded-xs border-gray-200"
                />
                <p className="my-2 text-red-500 text-right">
                    {errors[fieldName]?.message}
                </p>
            </div>
        </>
    )
}

export default TextField