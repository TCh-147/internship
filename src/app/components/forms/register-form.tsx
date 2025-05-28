import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputs from "./form-inputs";
import submitForm from "app/api/utilis/submitForm";
import { toast, ToastContainer } from "react-toastify";
import { RegisterSchema, registerSchema } from "app/validations/registerSchema";
import { registerFormFields } from "../../[locale]/register/register-form-fields";
import { useTranslations } from "next-intl";


export default function RegisterForm(){

  const t = useTranslations('Forms.Register')

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
          toast.success(t('Toasts.success'), {position: "top-center"})
        }
        else{
          toast.error(t('Toasts.fail'), {position: "top-center"})
        }        
    }

    return(
        <form 
        onSubmit={
          handleSubmit(onSubmit)
        } 
        className="grid grid-cols-1 justify-self-center w-2.5/6 mx-12 pt-0 p-6 border-2 rounded-xs border-gray-200">
          <ToastContainer/>
          <p className="my-6 text-center text-2xl font-bold">{t('Title')}</p>
          <p className="text-sm">{t('Description')}</p>
          <hr className="mt-4"/>
          <p className="my-4 text-[13.5px] before:content-['*'] before:text-red-500 before:pr-1">{t('RequiredInput')}</p>

          <div className="grid grid-cols-2">
            {
              registerFormFields.map(({fieldName, label, type, required, progress}) => (
                
                  <FormInputs key={fieldName} register={register} 
                  errors={errors} label={label} fieldName={fieldName} type={type} required={required} progress={progress} watch={watch}></FormInputs>
                  
              ))
            }
          </div>
          <hr className=" text-gray-400"/>
          <p className="text-sm my-6">{t('Reminder')}</p>

          <input type="submit" className="rounded-xs py-2 uppercase text-white bg-blue-800 hover:cursor-pointer" value={t('Button')}/>

        </form>
    )
}