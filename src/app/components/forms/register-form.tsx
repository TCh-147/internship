import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputs from "./form-inputs";
import submitForm from "app/api/utilis/submitForm";
import { toast, ToastContainer } from "react-toastify";
import { RegisterSchema, registerSchema } from "app/validations/registerSchema";
import { registerFormFields } from "../register/register-form-fields";


export default function RegisterForm(){

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
        const resultMessage = await submitForm("/register", data)
        if(resultMessage.success){
          toast.success("Успешна регистрация", {position: "top-center"})
        }
        else{
          toast.error("Неуспешна регистрация", {position: "top-center"})
        }        
    }
    
    return(
        <form 
        onSubmit={
          handleSubmit(onSubmit)
        } 
        className="grid grid-cols-1 justify-self-center w-2.5/6 mx-12 pt-0 p-6 border-2 rounded-xs border-gray-200">
          <ToastContainer/>
          <p className="my-6 text-center text-2xl font-bold">Регистрация на нов потребител</p>
          <p className="text-sm">Тази регистрационна форма се попълва, само ако нямате потребителско име и парола
            за Виртуален банков клон (e-fibank) на ПИБ. Ако вече имате потребителско име и парола,
            добавянето на достъп до ново физическо или юридическо лице става в банката.
            Ако сте забравили своето потребителско име и/или парола, заповядайте в банката, за да ги получите.
          </p>
          <hr className="mt-4"/>
          <p className="my-4 text-[13.5px] before:content-['*'] before:text-red-500 before:pr-1">Задължителни полета</p>

          <div className="grid grid-cols-2">
            {
              registerFormFields.map(({fieldName, label, type, required, progress}) => (
                
                  <FormInputs key={fieldName} register={register} 
                  errors={errors} label={label} fieldName={fieldName} type={type} required={required} progress={progress} watch={watch}></FormInputs>
                  
              ))
            }
          </div>
          <hr className=" text-gray-400"/>
          <p className="text-sm my-6">Необходимо е да запомните потребителското си име и парола, които току-що въведохте.След като
            потвърдите регистрацията в банката, те ще Ви служат за вход във виртуален банков клон(e-fibank).
          </p>

          <input type="submit" className="rounded-xs py-2 uppercase text-white bg-blue-800 hover:cursor-pointer" value="Изпратете искане за регистрация"/>

        </form>
    )
}