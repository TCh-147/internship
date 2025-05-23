import z from "zod";

export default function EmailCheckErrorMessage(field: string, errorMessage: string, err:z.RefinementCtx){
    if(!field.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))err.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMessage
    })
}