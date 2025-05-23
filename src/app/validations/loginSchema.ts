import { z } from "zod"
import EmptyFieldErrorMessage from "./empty-field-validation"

export const loginSchema = z.object({
    username: z.string().superRefine((name, err) => {
        EmptyFieldErrorMessage(name, "Моля, въведете потребителско име", err)
    }),
    password: z.string().superRefine((pass, err) => {
        EmptyFieldErrorMessage(pass, "Моля, въведете парола", err)
    })
})

export type LoginSchema = z.infer<typeof loginSchema>