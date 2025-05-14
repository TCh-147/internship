'use client'

import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema } from "../validations/loginSchema";
import submitLogin from "app/api/routes/submitLoginForm";

export default function Login(){
    const {
        register,
        handleSubmit
      } = useForm<LoginSchema>()
    
      const onSubmit: SubmitHandler<LoginSchema> = (data) => {
        submitLogin(data)
      }

      return(
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-self-end w-2.5/6 mx-12 pt-0 p-6 border-2 rounded-xs border-gray-200">
          <p className="my-4 text-center text-xl">Виртуален банков клон (e-fibank)</p>
          <label className="text-base before-red-star">Потребител:</label>
          <input {...register("username", {required: true})} className="mb-6 p-1 border-2 rounded-xs border-gray-200" type="text"/>
          <label className="text-base before-red-star">Парола:</label>
          <input {...register("password", {required: true})} className="mb-6 p-1 border-2 rounded-xs border-gray-200 " type="password"/>
          <input type="submit" className="rounded-xs py-2 uppercase text-white bg-blue-800" value="Вход"/>
        </form>
      )
}

