import { RegisterSchema } from "./validations/registerSchema";

export interface FieldConfig {
  fieldName: keyof RegisterSchema;
  label: string;
  type: string;
  required?: boolean;
}

export const fields: FieldConfig[] = [
  { fieldName: "egn",            label: "ЕГН",                       type: "text",     required: true },
  { fieldName: "lnchOrPassport", label: "ЛНЧ или паспорт",          type: "text" },
  { fieldName: "fullNameCyrillic", label: "Име и фамилия на кирилица", type: "text", required: true },
  { fieldName: "fullNameLatin",  label: "Име и фамилия на латиница",   type: "text", required: true },
  { fieldName: "email",          label: "Имейл",                     type: "email",    required: true },
  { fieldName: "phoneNum",       label: "Телефон",                   type: "tel",      required: true },
  { fieldName: "address",        label: "Адрес",                     type: "text",     required: true },
  { fieldName: "username",       label: "Потребителско име",          type: "text",     required: true },
  { fieldName: "password",       label: "Парола за вход",             type: "password", required: true },
  { fieldName: "confirmPass",    label: "Повторете паролата",         type: "password", required: true },
];