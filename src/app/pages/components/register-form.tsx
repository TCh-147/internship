import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {submitForm} from "app/api/routes/submitForm";
import { registerSchema, RegisterSchema } from "../validations/registerSchema";
import TextField from "./text-field";
import {fields} from "../register-form-fields"

export default function RegisterForm(){

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(registerSchema)
    })


    const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
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
            {
              fields.map(({fieldName, label, type, required}) => (
                
                  <TextField key={fieldName} register={register} 
                  errors={errors} label={label} fieldName={fieldName} type={type} required={required}></TextField>
                
              ))
            }
            
          </div>

          <p className="text-sm my-6">Необходимо е да запомните потребителското си име и парола, които току-що въведохте.След като
            потвърдите регистрацията в банката, те ще Ви служат за вход във виртуален банков клон(e-fibank).
          </p>

          <input type="submit" className="rounded-xs py-2 uppercase text-white bg-blue-800 hover:cursor-pointer" value="Регистрирай се"/>

        </form>
    )
}