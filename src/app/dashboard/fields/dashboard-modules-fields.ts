export interface FieldConfig {
    title: string
    checkbox?: boolean
}

// -------------- MODULES TABLE TOP FIELDS ---------------

export const accountFields: FieldConfig[] = [
    {title: "Сметка"},
    {title: "Валута"},
    {title: "Разполагаемост"},
    {title: "Начално сладо за деня"},
    {title: "Текущо салдо"},
    {title: "Дължими суми от такси"},
    {title: "Действия"}
]

export const lastFiveFields: FieldConfig[] = [
    {title: "Тип"},
    {title: "Дата"},
    {title: "Документ и референция"},
    {title: "Получател / наредител"},
    {title: "Сметка"},
    {title: "Сума и валута"},
]

export const depositFields: FieldConfig[] = [
    {title: "Депозит"},
    {title: "Валута"},
    {title: "Разполагаемост"},
    {title: "Натрупана лихва"},
    {title: "Падеж"},
    {title: "Действия"}
]

export const forSignatureFields: FieldConfig[] = [
    {title: "Вид плащане", checkbox: true},
    {title: "Платец"},
    {title: "Получател"},
    {title: "Сума и валута"}
]

export const cardsFields: FieldConfig[] = [
    {title: "Карта", checkbox: true},
    {title: "Валута"},
    {title: "Наличност"},
    {title: "Задължения"},
    {title: "Мин. вноска"},
    {title: "Погасете до"},
    {title: "3D сигурност"}
]

export const awaitingPayments: FieldConfig[] = [
    {title: "Наименование", checkbox: true},
    {title: "Към дата"},
    {title: "Автом. плащане"},
    {title: "Сума"}
]

export const creditsFields: FieldConfig[] = [
    {title: "Вид кредит", checkbox: true},
    {title: "Валута"},
    {title: "Лихвен %"},
    {title: "Дължима вноска"},
    {title: "Дата за вноска"},
    {title: "Падеж"},
]