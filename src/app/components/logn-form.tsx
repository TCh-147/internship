'use client'

import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "./validations/loginSchema";
import submitForm from "app/api/utilis/submitForm";
import { toast, ToastContainer } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login(){
    const {
        register,
        handleSubmit,
        formState: {errors}
      } = useForm({
        resolver: zodResolver(loginSchema)
      })
    
      const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
        const resultMessage = await submitForm("/login", data)
        if(resultMessage.success){
          console.log("Successful login")
          toast.success("Успешен вход!", {position: "top-center"})
        }
        else{ 
          console.log("Unsuccessful login")
          toast.error("Неуспешен вход", {position: "top-center"})
        }
      }

      return(
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-self-end self-start w-2.5/6 mx-12 pt-0 p-6 border-2 rounded-xs border-gray-200">
          <p className="my-6 text-center text-xl">Виртуален банков клон (e-fibank)</p>
          <label className="mt-2 text-base before-red-star">Потребител:</label>
          <input {...register("username", {required: true})} className="p-1 border-2 rounded-xs border-gray-200" type="text"/>
          <p className="my-2 text-red-500 text-right">{errors.username?.message}</p>
          <label className="my-2 text-base before-red-star">Парола:</label>
          <input {...register("password", {required: true})} className="p-1 border-2 rounded-xs border-gray-200 " type="password"/>
          <p className="my-2 text-red-500 text-right">{errors.password?.message}</p>
          <input type="submit" className="mt-6 rounded-xs py-2 uppercase text-white bg-blue-800 hover:cursor-pointer" value="Вход"/>
          <ToastContainer/>
        </form>
      )
}

