import z from "zod";

export default function CheckLengthErrorMessage(field: string, check: string, length: number, errorMessage: string, err:z.RefinementCtx){
    switch(check){
        case "equal":
            if(field.length != length)err.addIssue({
                code: z.ZodIssueCode.custom,
                message: errorMessage
            });
            break;
        case "less":
            if(field.length < length)err.addIssue({
                code: z.ZodIssueCode.custom,
                message: errorMessage
            });
            break;
        case "greater":
            if(field.length > length)err.addIssue({
                code: z.ZodIssueCode.custom,
                message: errorMessage
            });
            break;
    }
    
}