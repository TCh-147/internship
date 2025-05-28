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
        EmptyFieldErrorMessage(egn, "Register.Errors.emptyEGN", err)
        CheckLengthErrorMessage(egn, "equal", 10, "Register.Errors.invalidEGN", err)
      }),

    fullNameCyrillic: z.string()
    .superRefine((nameCyrillic, err)=> 
      {
        EmptyFieldErrorMessage(nameCyrillic, "Register.Errors.emptyName", err)
        CyrillicCheckErrorMessage(nameCyrillic, "Register.Errors.invalidNameCyrillic", err)
      }),

    fullNameLatin: z.string()
    .superRefine((nameLatin, err) => 
      {
        EmptyFieldErrorMessage(nameLatin, "Register.Errors.emptyName", err)
        LatinCheckErrorMessage(nameLatin, "Register.Errors.invalidNameLatin", err)
      }),

    lnchOrPassport: z.number({invalid_type_error: "Register.Errors.invalidLnch"}).optional().or(z.literal('')).refine(
      (data) => data?.toString().length != 10, {message: "Register.Errors.invalidLnch"}
    ),

    phoneNum: z.string()
    .superRefine((phone, err) => 
      {
        EmptyFieldErrorMessage(phone, "Register.Errors.emptyPhone", err)
        NumberCheckErrorMessage(phone, "Register.Errors.invalidPhone", err)
        CheckLengthErrorMessage(phone, "equal", 10, "Register.Errors.invalidPhone", err)
      }),

    email: z.string()
    .superRefine((email, err) => 
      {
        EmptyFieldErrorMessage(email, "Register.Errors.emptyEmail", err)
        EmailCheckErrorMessage(email, "Register.Errors.invalidEmail", err)
      }),

    address: z.string()
    .superRefine((address, err) => 
      {
        EmptyFieldErrorMessage(address, "Register.Errors.emptyAddress", err)
        CheckLengthErrorMessage(address, "less", 10, "Register.Errors.invalidAddress", err)
      }),

    username: z.string()
    .superRefine((username, err) => 
      {
        EmptyFieldErrorMessage(username, "Register.Errors.emptyUsername", err)
        CheckLengthErrorMessage(username, "less", 5, "Register.Errors.usernameShort", err)
        LatinCheckErrorMessage(username, "Register.Errors.usernameNotLatin", err)
      }),

    password: z.string()
    .superRefine((pass, err) => {
      EmptyFieldErrorMessage(pass, "Register.Errors.emptyPassword", err)
      CheckLengthErrorMessage(pass, "less", 6, "Register.Errors.passwordShort", err)
      CheckLengthErrorMessage(pass, "greater", 24, "Register.Errors.passwordLong", err)
      LatinCheckErrorMessage(pass, "Register.Errors.passwordNotLatin", err)
      NumberCheckErrorMessage(pass, "Register.Errors.passwordNoNumber", err)
    }),
    confirmPass: z.string().superRefine((confirmPAss, err) => {
      EmptyFieldErrorMessage(confirmPAss, "Register.Errors.emptyConfirmPassword", err)
    })
}).superRefine((data, error) => {
    if(data.password !== data.confirmPass)error.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Register.Errors.passwordNotMatch",
      path: ["confirmPass"]
    })
  })


export type RegisterSchema = z.infer<typeof registerSchema>

