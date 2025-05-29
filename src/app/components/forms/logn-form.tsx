'use client'

import { SubmitHandler, useForm } from "react-hook-form";
import submitForm from "app/api/utilis/submitForm";
import { toast, ToastContainer } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchema } from "app/validations/loginSchema";
import { useTranslations } from "next-intl";
import Redirect from "app/api/utilis/redirectDashboard";
import { useRouter } from "next/navigation";
import UserIcon from "../icons/user";

export default function LoginForm(){
  const t = useTranslations('Forms.Login')
  const router = useRouter()

  if (typeof window !== 'undefined') {
    localStorage.clear()
  }

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
          toast.success(t('Toasts.success'), {position: "top-center"})
          let token = resultMessage.token
          localStorage.setItem("token", token)
          const redirectToken = localStorage.getItem("token") || ""
          const redirect = await Redirect("/dashboard", redirectToken)
          if(redirect.success){
            router.push('/dashboard')
          }else{
            toast.error("Authentication failed")
          }
          console.log("local storage: ", localStorage.getItem("token"))
        }
        else{ 
          toast.error(t('Toasts.fail'), {position: "top-center"})
        }
      }

      return(
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-self-end self-start w-2.5/6 mx-12 pt-0 p-6 border-2 rounded-xs border-gray-200">
          <p className="my-6 text-center text-xl">{t('Title')}</p>
          <label className="mt-2 text-base before:content-['*'] before:text-red-500 before:pr-1">{t('Labels.username')}</label>
          <input {...register("username", {required: true})} className="p-1 border-2 rounded-xs border-gray-200" type="text"/>
          <p className="my-2 text-red-500 text-right">{errors.username?.message ? t(errors.username?.message) : ""}</p>
          <label className="my-2 text-base before:content-['*'] before:text-red-500 before:pr-1">{t('Labels.password')}</label>
          <input {...register("password", {required: true})} className="p-1 border-2 rounded-xs border-gray-200 " type="password"/>
          <p className="my-2 text-red-500 text-right">{errors.password?.message ? t(errors.password?.message) : ""}</p>
          <input type="submit" className="mt-6 rounded-xs py-2 uppercase text-white bg-blue-800 hover:cursor-pointer" value={t('Labels.button')}/>
          <ToastContainer/>
        </form>
      )
}

