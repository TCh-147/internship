'use client'

import { useTranslations } from "next-intl"

type Props = {
    register: any
    errors: any
    label: string
    fieldName: string
    type: string
    required?: boolean
    progress?: boolean
    watch?: any
}

const FormInputs = ({ register, errors, label, fieldName, type, required, progress, watch}: Props) => {

    const t = useTranslations('Forms')
    const pass = watch(`${fieldName === "password" ? "password" : ""}`)

    let strength = 0
    const passStrength = (password: string) => {
        
        if(!password) return strength=0
        if(password.length > 6) strength+=1
        if(password.match(/[A-Za-z]/)) strength+=1
        if(password.match(/[0-9]/)) strength+=1
        if(password.length > 24) strength=1
    }
    passStrength(pass)


    return (
        <>
            <label className={`my-2 px-2 text-base ${required ? "before:content-['*'] before:text-red-500 before:pr-1" : ""}`}>
                {t(label)}
            </label>
            <div>
                <input
                    {...register(fieldName, { required })}
                    type={type}
                    className="my-2 p-1 w-full border-2 rounded-xs border-gray-200"
                />
                <div className={`${progress ? "col-2 mb-4 w-5.5/6 bg-gray-200 h-2 rounded-full" : "hidden"}`}>
                    <div className={`absolute w-0 h-2 rounded-full transition-[width] transition-discrete duration-800 ease-in-out 
                    ${strength == 1 ? "w-20 bg-red-600" : ""}
                    ${strength == 2 ? "w-40 bg-amber-400" : ""}
                    ${strength == 3 ? "w-76.5 bg-green-600" : ""}`}></div>

                </div>
                <p className="my-2 text-red-500 text-right">
                    {errors[fieldName]?.message ? t(errors[fieldName]?.message) : ""}
                </p>
            </div>
        </>
    )
}

export default FormInputs