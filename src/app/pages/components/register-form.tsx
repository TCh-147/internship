import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {submitForm} from "app/api/routes/submitForm";
import { validationSchema, ValidationSchema } from "../validations/registerSchema";

export default function RegisterForm(){

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(validationSchema)
    })


    const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
        await submitForm(data)
    }

    return(
        <form 
        onSubmit={
          handleSubmit(onSubmit)
        } 
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
    )
}