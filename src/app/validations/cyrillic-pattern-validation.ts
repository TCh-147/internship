import z from "zod";

export default function CyrillicCheckErrorMessage(field: string, errorMessage: string, err:z.RefinementCtx){
    if(!field.match(/[А-Яа-я]/))err.addIssue({
        code: z.ZodIssueCode.custom,
        message: errorMessage
    })
}