import { RegisterSchema } from "app/validations/registerSchema";

export interface FieldConfig {
  fieldName: keyof RegisterSchema;
  label: string;
  type: string;
  required?: boolean;
  progress?: boolean;
  watch?: any;
}

export const registerFormFields: FieldConfig[] = [
  { fieldName: "egn", label: "Register.Labels.egn", type: "text", required: true },
  { fieldName: "lnchOrPassport", label: "Register.Labels.lnch", type: "text" },
  { fieldName: "fullNameCyrillic", label: "Register.Labels.cyrillic", type: "text", required: true },
  { fieldName: "fullNameLatin", label: "Register.Labels.latin", type: "text", required: true },
  { fieldName: "email", label: "Register.Labels.email", type: "email", required: true },
  { fieldName: "phoneNum", label: "Register.Labels.phone", type: "tel", required: true },
  { fieldName: "address", label: "Register.Labels.address", type: "text", required: true },
  { fieldName: "username", label: "Register.Labels.username", type: "text", required: true },
  { fieldName: "password", label: "Register.Labels.password", type: "password", required: true, progress: true },
  { fieldName: "confirmPass", label: "Register.Labels.confirmPass", type: "password", required: true },
];