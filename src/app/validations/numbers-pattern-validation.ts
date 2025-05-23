import z from "zod";

export default function NumberCheckErrorMessage(field: string, errorMessage: string, err:z.RefinementCtx){
    if(!field.match(/[0-9]/))err.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMessage
    })
}