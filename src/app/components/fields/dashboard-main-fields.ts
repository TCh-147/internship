import { declarations, IDropDownFieldConfig, inquiries, publicServices, purchases, services, withdrawals } from "./dropdown-fields"

export interface FieldConfig{
    title: string
    dropDown?: boolean
    dropDownFields?: IDropDownFieldConfig[]
}

export const fieldsMain: FieldConfig[] = [
    {title: "Начало"},
    {title: "Справки", dropDown: true, dropDownFields: inquiries},
    {title: "Плащания", dropDown: true, dropDownFields: purchases},
    {title: "Извлечения", dropDown: true, dropDownFields: withdrawals},
    {title: "Сметки"},
    {title: "Депозити"},
    {title: "Карти"},
    {title: "Превод за подпис"},
    {title: "Наредени документи"},
    {title: "Услуги", dropDown: true, dropDownFields: services},
    {title: "Комунални услуги", dropDown: true, dropDownFields: publicServices},
    {title: "Декларации", dropDown: true, dropDownFields: declarations}
]