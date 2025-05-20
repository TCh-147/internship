import { z } from "zod"

export const loginSchema = z.object({
    username: z.string().superRefine((name, err) => {
        if(name.length == 0)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете потребителско име"
        })
    }),
    password: z.string().superRefine((pass, err) => {
        if(pass.length == 0)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Моля, въведете парола"
        })
    })
})

export type LoginSchema = z.infer<typeof loginSchema>