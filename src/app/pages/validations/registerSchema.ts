import { z } from "zod"

export const registerSchema = z.object({
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

export type RegisterSchema = z.infer<typeof registerSchema>