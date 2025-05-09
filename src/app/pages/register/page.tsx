'use client'

import Link from "next/link";
import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";



export default function Register() {

  const validationSchema = z.object({
    egn: z.string({required_error: "Моля, въведете ЕГН!"}).length(10, {message: "Невалидно ЕГН!"}),
    fullNameCyrillic: z.string({required_error: "Моля, въведете име!"}).refine(
      (name) => name.match(/[А-Яа-я]/), {message: "Моля, въведете име на кирилица!"}
    ),
    fullNameLatin: z.string({required_error: "Моля, въведете име!"}).refine(
      (name) => name.match(/[A-Za-z]/), {message: "Моля, въведете име на латиница!"}
    ),
    lnchOrPassport: z.number({invalid_type_error: "Невалиден ЛНЧ!"}).optional().or(z.literal('')).refine(
      (data) => data?.toString().length != 10, {message: "Невалиден ЛНЧ!"}
    ),
    phoneNum: z.string({required_error: "Моля, въведете телефон!"}).length(10, {message: "Невалиден телефон!"}).refine(
      (phone) => phone.match(/[0-9]/), {message: "Невалиден телефон!"}
    ),
    email: z.string({required_error: "Моля, въведете имейл!"}).email({message: "Невалиден имейл!"}),
    address: z.string({required_error: "Моля, въведете адрес!"}).min(5,{message: "Моля въведете валиден адрес!"}),
    username: z.string({required_error: "Моля, въведете потребителско име!"}).refine(
      (username) => username.match(/[A-Za-z]/), {message: "Символи на кирилица не са позволени!"}
    ),
    password: z.string({required_error: "Моля, въведете парола!"})
    .superRefine((pass, err) => {
      if(pass.length < 6)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Паролата е твърде къса!"
      })
      if(!pass.match(/[0-9]/)) err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Паролата трябва да съдържа поне една цифра!"
      })
      if(pass.length > 24)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Паролата е твърде дълга!"
      })
      if(!pass.match(/[A-Za-z]/)) err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Паролата трябва да съдържа поне една буква на латиница!"
      })
      
    }),
    confirmPass: z.string({required_error: "Моля, повторете паролата!"})
  }).refine((data) => data.password === data.confirmPass, {
    message: "Паролата не съвпада!"
  })

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: zodResolver(validationSchema)
  })

  useEffect(() => {
    fetch("/register/newUser", {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(handleSubmit)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="grid">
      <nav className="border-b-2 border-gray-300">
        <ul className="list-none grid w-full grid-cols-7 justify-between text-base">
          <li className="p-4">Logo</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">English</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">Към сайта</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">Мобилно приложение</li>
          <li className="justify-self-center self-center p-4 text-center hover:cursor-pointer">Промени в Оу и тарифа</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">Помощ</li>
          <li className="justify-self-center self-center p-2"><button className="p-2 px-4 uppercase text-sm bg-gray-200 hover:cursor-pointer"><Link href="/">Вход</Link></button></li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 w-3/6 items-center my-12 m-auto">

        <form 
        onSubmit={handleSubmit((newUser) => newUser)} 
        className="grid grid-cols-1 justify-self-center w-2.5/6 mx-12 pt-0 p-6 border-2 rounded-xs border-gray-200">
          <p className="my-6 text-center text-2xl font-bold">Регистрация на нов потребител</p>
          <p className="text-sm">Тази регистрационна форма се попълва, само ако нямате потребителско име и парола
            за Виртуален банков клон (e-fibank) на ПИБ. Ако вече имате потребителско име и парола,
            добавянето на достъп до ново физическо или юридическо лице става в банката.
            Ако сте забравили своето потребителско име и/или парола, заповядайте в банката, за да ги получите.
          </p>
          <p className="my-4 text-[13.5px] before-red-star">Задължителни полета</p>

          <div className="grid grid-cols-2">
            <label className="my-2 px-2 text-base before-red-star">ЕГН:</label>
            <div className="m-0 p-0">
              <input {...register("egn",{required: true})} className="my-2 p-1 w-full border-2 rounded-xs border-gray-200" type="text"/>
              <p className="my-2 text-red-500 text-right">{errors.egn?.message}</p>
            </div>
            <label className="my-2 px-2 text-base">ЛНЧ или паспорт:</label>
            <div>
              <input {...register("lnchOrPassport")} className="my-2 p-1 w-full border-2 rounded-xs border-gray-200" type="text"/>
              <p className="my-2 text-red-500 text-right">{errors.lnchOrPassport?.message}</p>
            </div>
            
            <label className="my-2 px-2 text-base before-red-star">Име и фамилия на кирилица:</label>
            <div>
              <input {...register("fullNameCyrillic")} className="my-2 p-1 w-full border-2 rounded-xs border-gray-200" type="text"/>
              <p className="my-2 text-red-500 text-right">{errors.fullNameCyrillic?.message}</p>
            </div>
            
            <label className="my-2 px-2 text-base before-red-star">Име и фамилия на латиница:</label>
            <div>
              <input {...register("fullNameLatin")} className="my-2 p-1 w-full border-2 rounded-xs border-gray-200" type="text"/>
              <p className="my-2 text-red-500 text-right">{errors.fullNameLatin?.message}</p>
            </div>
            
            <label className="my-2 px-2 text-base before-red-star">Имейл:</label>
            <div>
              <input {...register("email")} className="my-2 p-1 w-full border-2 rounded-xs border-gray-200" type="text"/>
              <p className="my-2 text-red-500 text-right">{errors.email?.message}</p>
            </div>
            
            <label className="my-2 px-2 text-base before-red-star">Телофон:</label>
            <div>
              <input {...register("phoneNum")} className="my-2 p-1 w-full border-2 rounded-xs border-gray-200" type="text"/>
              <p className="my-2 text-red-500 text-right">{errors.phoneNum?.message}</p>
            </div>
            
            <label className="my-2 px-2 text-base before-red-star">Адрес:</label>
            <div>
              <input {...register("address")} className="my-2 p-1 w-full border-2 rounded-xs border-gray-200" type="text"/>
              <p className="my-2 text-red-500 text-right">{errors.address?.message}</p>
            </div>

            <label className="my-2 px-2 text-base before-red-star">Потребителско име:</label>
            <div>
              <input {...register("username")} className="my-2 p-1 w-full border-2 rounded-xs border-gray-200" type="text"/>
              <p className="my-2 text-red-500 text-right">{errors.username?.message}</p>
            </div>
            
            <label className="my-2 px-2 text-base before-red-star">Парола за вход:</label>
            <div>
              <input {...register("password")} className="my-2 p-1 w-full border-2 rounded-xs border-gray-200 " type="password"/>
              <p className="my-2 text-red-500 text-right">{errors.password?.message}</p>
            </div>
            
            <label className="my-2 px-2 text-base before-red-star">Повторете паролата:</label>
            <div>
              <input {...register("confirmPass")} className="my-2 p-1 w-full border-2 rounded-xs border-gray-200 " type="password"/>
              <p className="my-2 text-red-500 text-right">{errors.confirmPass?.message}</p>
            </div>
            
          </div>

          <p className="text-sm my-6">Необходимо е да запомните потребителското си име и парола, които току-що въведохте.След като
            потвърдите регистрацията в банката, те ще Ви служат за вход във виртуален банков клон(e-fibank).
          </p>

          <input type="submit" className="rounded-xs py-2 uppercase text-white bg-blue-800 hover:cursor-pointer" value="Регистрирай се"/>

        </form>

      </div>

        <footer className=" bg-gray-100">

          <div className="text-[13.5px] text-center pt-4">
            <div className="flex flex-row justify-center m-auto">
              <p className="px-4 border-r-2 border-gray-300 after-arrow-symbol hover:cursor-pointer">Как да добавя сметка</p>
              <p className="px-4 border-r-2 border-gray-300 after-arrow-symbol hover:cursor-pointer">Всичко с един потребител (SSO)</p>
              <p className="px-4 border-r-2 border-gray-300 after-arrow-symbol hover:cursor-pointer">Процес на регистрация</p>
              <p className="px-4 border-r-2 border-gray-300 after-arrow-symbol hover:cursor-pointer">Електронен подпис</p>
              <p className="px-4 border-r-2 border-gray-300 after-arrow-symbol hover:cursor-pointer">Такси и комисиони</p>
              <p className="px-4 after-arrow-symbol">Документи</p>
            </div>
            <p className="before-copyright-symbol pt-4">Първа инвестиционна банка 2009-2015.</p>
          </div>

        </footer>
    </div>
  );
}
