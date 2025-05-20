export interface IDropDownFieldConfig{
    title: string
    section?: string
    line?: boolean
}

// -------------- LOGIN FIELDS ---------------

export const helpFields: IDropDownFieldConfig[] = [
    {title: "Помощни статии", section: "Информация"},
    {title: "Често задавани въпроси"},
    {title: "Съвети за сигурност", line: true},
    {title: "0700 12 777", section: "Връзка с нас"},
    {title: "help@fibank.bg"},
    {title: "Онлайн чат"},
]

// -------------- DASHBOARD SIDE MENU FIELDS ---------------

export const inquiries: IDropDownFieldConfig[] = [
    {title:"ПОС транзакции - по групи"},
    {title:"ПОС транзакции за период"},
    {title:"Салда по всички сметки SSO"},
    {title:"Дневен отчет за бюдж. разпродател"},
    {title:"Извършени услуги за клиент"},
    {title:"Изпратени SMS нотификации"},
    {title:"Дължими суми от такси"},
    {title:"Преводи по SWIFT"},
    {title:"Сесии"}
]

export const purchases: IDropDownFieldConfig[] = [
    {title:"Нов кредитен превод", section: "Преводи"},
    {title:"Плащане от/към бюджета"},
    {title:"Директен дебит"},
    {title:"Масов превод"},
    {title:"Преводи от файл"},
    {title:"Нов периодичен превод"},
    {title:"Плащания към СЕБРА"},
    {title:"Кредитен превод CY"},
    {title:"Вътрешноклонов превод CY", line: true},
    {title:"Покупка/продажба на валута", section:"Покупка/продажба на ваута"},
    {title:"Договаряне на курс", line: true},
    {title:"Регистър на пер. преводи", section: "Регистри"},
    {title:"Получатели за преводи"},
]

export const withdrawals: IDropDownFieldConfig[] = [
    {title: "Извлечение по сметка"},
    {title: "Извлечение по кредитна карта"}
] 

export const services: IDropDownFieldConfig[] = [
    {title: "Отчети по e-mail за сметка"},
    {title: "Извлечения по e-mail за карти"},
    {title: "Картови авторизации по e-mail"},
    {title: "Преводи по SWIFT по e-mail"}
]

export const publicServices: IDropDownFieldConfig[] = [
    {title: "Задължения очакващи плащания", section: "Плащане на задължения"},
    {title: "Плащане на задължения"},
    {title: "Плащане на общински данъци и такси"},
    {title: "Еднократно плащане", line: true},
    {title: "Добавяне на абонатна сметка", section: "Абонатни сметки"},
    {title: "Регистрирани абонатни сметки", line: true},
    {title: "Известия по e-mail"},
    {title: "История на плащания", section: "Други"}
]

export const declarations: IDropDownFieldConfig[] = [
    {title: "Декларация в НОИ"},
    {title: "Статистическа форма 100 000 лв."},
    {title: "Декларация за произход на средствата"},
    {title: "Декларация за презгранични преводи"}
]

// -------------- DASHBOARD NAVIGATION FIELDS ---------------

export const settingsDashboard: IDropDownFieldConfig[] = [
    {title: "Лични данни"},
    {title: "Общи настройки"},
    {title: "Настройки на сметка"},
    {title: "Настройки на депозит"},
    {title: "Настройки на карта"},
    {title: "3D сигурност на карти"},
    {title: "Промяна на парола"},
    {title: "Регистриране на сертификат"},
    {title: "Регистриране на КЕП"},
    {title: "Промяна ПИН TOKEN"},
    {title: "Email и SMS известяване"},
    {title: "SMS известяване за карти"},
    {title: "Мобилно приложение Fibank"}
]