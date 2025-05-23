import z from "zod"

export default function EmptyFieldErrorMessage(field: string, errorMessage: string, err:z.RefinementCtx){
    
    if(field.length == 0)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMessage
    })
}