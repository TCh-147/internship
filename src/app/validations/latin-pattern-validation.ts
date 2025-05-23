import z from "zod";

export default function LatinCheckErrorMessage(field: string, errorMessage: string, err:z.RefinementCtx){
    if(!field.match(/[A-Za-z]/))err.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMessage
    })
}