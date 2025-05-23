import { IDropDownFieldConfig, inquiriesDropDownFields, purchasesDropDownFields, withdrawalsDropDownFields, servicesDropDownFields, publicServicesDropDownFields, declarationsDropDownFields } from "../../common/dropdown-fields"

export interface FieldConfig{
    title: string
    dropDown?: boolean
    dropDownFields?: IDropDownFieldConfig[]
}

// -------------- DASHBOARD SIDE MENU FIELDS ---------------

export const sideMenuMainFields: FieldConfig[] = [
    {title: "Начало"},
    {title: "Справки", dropDown: true, dropDownFields: inquiriesDropDownFields},
    {title: "Плащания", dropDown: true, dropDownFields: purchasesDropDownFields},
    {title: "Извлечения", dropDown: true, dropDownFields: withdrawalsDropDownFields},
    {title: "Сметки"},
    {title: "Депозити"},
    {title: "Карти"},
    {title: "Превод за подпис"},
    {title: "Наредени документи"},
    {title: "Услуги", dropDown: true, dropDownFields: servicesDropDownFields},
    {title: "Комунални услуги", dropDown: true, dropDownFields: publicServicesDropDownFields},
    {title: "Декларации", dropDown: true, dropDownFields: declarationsDropDownFields}
]

export const sideMenuAdditionalFields: FieldConfig[] = [
    {title: "Помощ"},
    {title: "Към сайта"},
    {title: "Мобилно приложение"},
]

export const sideMenuInfoFields: FieldConfig[] = [
    {title: "Клонове"},
    {title: "Банкомати"},
    {title: "Валутни курсове"},
    {title: "Новини"},
    {title: "Промоции"}
]