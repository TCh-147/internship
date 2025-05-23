import { z } from "zod"
import EmptyFieldErrorMessage from "./empty-field-validation"
import CheckLengthErrorMessage from "./correct-length-validation"
import CyrillicCheckErrorMessage from "./cyrillic-pattern-validation"
import NumberCheckErrorMessage from "./numbers-pattern-validation"
import LatinCheckErrorMessage from "./latin-pattern-validation"
import EmailCheckErrorMessage from "./email-pattern-validation"

export const registerSchema = z.object
({
    egn: z.string()
    .superRefine((egn, err)=>
      {
        EmptyFieldErrorMessage(egn, "Моля, въведете ЕГН!", err)
        CheckLengthErrorMessage(egn, "equal", 10, "Невалидно ЕГН!", err)
      }),

    fullNameCyrillic: z.string()
    .superRefine((nameCyrillic, err)=> 
      {
        EmptyFieldErrorMessage(nameCyrillic, "Моля, въведете име!", err)
        CyrillicCheckErrorMessage(nameCyrillic, "Моля, въведете име на кирилица!", err)
      }),

    fullNameLatin: z.string()
    .superRefine((nameLatin, err) => 
      {
        EmptyFieldErrorMessage(nameLatin, "Моля, въведете име!", err)
        LatinCheckErrorMessage(nameLatin, "Моля, въведете име на латиница!", err)
      }),

    lnchOrPassport: z.number({invalid_type_error: "Невалиден ЛНЧ!"}).optional().or(z.literal('')).refine(
      (data) => data?.toString().length != 10, {message: "Невалидно ЛНЧ!"}
    ),

    phoneNum: z.string()
    .superRefine((phone, err) => 
      {
        EmptyFieldErrorMessage(phone, "Моля, въведете телефон!", err)
        NumberCheckErrorMessage(phone, "Невалиден телефон!", err)
        CheckLengthErrorMessage(phone, "equal", 10, "Невалиден телефон!", err)
      }),

    email: z.string()
    .superRefine((email, err) => 
      {
        EmptyFieldErrorMessage(email, "Моля, въведете имейл!", err)
        EmailCheckErrorMessage(email, "Невалиден имейл!", err)
      }),

    address: z.string()
    .superRefine((address, err) => 
      {
        EmptyFieldErrorMessage(address, "Моля, въведете адрес!", err)
        CheckLengthErrorMessage(address, "less", 10, "Моля, въведете валиден адрес!", err)
      }),

    username: z.string()
    .superRefine((username, err) => 
      {
        EmptyFieldErrorMessage(username, "Моля, въведете потребителско име!", err)
        CheckLengthErrorMessage(username, "less", 5, "Потребителското име е твърде късо!", err)
        LatinCheckErrorMessage(username, "Моля, въведете потребителско име на латиница!", err)
      }),

    password: z.string()
    .superRefine((pass, err) => {
      EmptyFieldErrorMessage(pass, "Моля, въведете парола!", err)
      CheckLengthErrorMessage(pass, "less", 6, "Паролата е твърде къса!", err)
      CheckLengthErrorMessage(pass, "greater", 24, "Паролата е твърде дълга!", err)
      LatinCheckErrorMessage(pass, "Паролата трябва да съдържа символи на латиница!", err)
      NumberCheckErrorMessage(pass, "Паролата трябва да съдържа поне една цифра!", err)
    }),
    confirmPass: z.string().superRefine((confirmPAss, err) => {
      EmptyFieldErrorMessage(confirmPAss, "Моля, повторете паролата!", err)
    })
}).superRefine((data, error) => {
    if(data.password !== data.confirmPass)error.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Паролата не съвпада!",
      path: ["confirmPass"]
    })
  })


export type RegisterSchema = z.infer<typeof registerSchema>

