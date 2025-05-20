import { z } from "zod"

export const registerSchema = z.object
({
    egn: z.string()
    .superRefine((egn, err)=>
      {
        if(egn.length == 0)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете ЕГН!"
        })
        if(egn.length != 10)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Невалидно ЕГН!"
        })
      }),

    fullNameCyrillic: z.string()
    .superRefine((nameCyrillic, err)=> 
      {
        if(nameCyrillic.length == 0)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете име!"
        })
        if(!nameCyrillic.match(/[А-Яа-я]/))err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете име на кирилица!"
        })
      }),

    fullNameLatin: z.string()
    .superRefine((nameLatin, err) => 
      {
        if(nameLatin.length == 0)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете име!"
        })
        if(!nameLatin.match(/[A-Za-z]/))err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете име на латиница!"
        })
      }),

    lnchOrPassport: z.number({invalid_type_error: "Невалиден ЛНЧ!"}).optional().or(z.literal('')).refine(
      (data) => data?.toString().length != 10, {message: "Невалидно ЛНЧ!"}
    ),

    phoneNum: z.string()
    .superRefine((phone, err) => 
      {
        if(phone.length == 0)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете телефон!"
        })
        if(!phone.match(/^[0-9]{10}$/))err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Невалиден телефон!"
        })
      }),

    email: z.string()
    .superRefine((email, err) => 
      {
        if(email.length == 0)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете имейл!"
        })
        if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Невалиден имейл!"
        })
      }),

    address: z.string()
    .superRefine((address, err) => 
      {
        if(address.length == 0)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете адрес!"
        })
        if(address.length < 10)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля въведете валиден адрес!"
        })
      }),

    username: z.string()
    .superRefine((username, err) => 
      {
        if(username.length == 0)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете потребителско име!"
        })
        if(!username.match(/[A-Za-z]/))err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Символи на кирилица не са позволени!"
        })
      }),

    password: z.string()
    .superRefine((pass, err) => {
      if(pass.length == 0) err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете парола!"
      })
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
        message: "Паролата трябва да съдържа буква на латиница!"
      })
      
    }),
    confirmPass: z.string()
}).superRefine((data, error) => {
    if(data.password !== data.confirmPass)error.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Паролата не съвпада!",
      path: ["confirmPass"]
    })
  })


export type RegisterSchema = z.infer<typeof registerSchema>