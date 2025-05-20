export interface IDropDownFieldConfig{
    title: string
    section?: string
    line?: boolean
    dashboard?: boolean
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
    {title:"ПОС транзакции - по групи", dashboard: true},
    {title:"ПОС транзакции за период", dashboard: true},
    {title:"Салда по всички сметки SSO", dashboard: true},
    {title:"Дневен отчет за бюдж. разпродател", dashboard: true},
    {title:"Извършени услуги за клиент", dashboard: true},
    {title:"Изпратени SMS нотификации", dashboard: true},
    {title:"Дължими суми от такси", dashboard: true},
    {title:"Преводи по SWIFT", dashboard: true},
    {title:"Сесии", dashboard: true}
]

export const purchases: IDropDownFieldConfig[] = [
    {title:"Нов кредитен превод", section: "Преводи", dashboard: true},
    {title:"Плащане от/към бюджета", dashboard: true},
    {title:"Директен дебит", dashboard: true},
    {title:"Масов превод", dashboard: true},
    {title:"Преводи от файл", dashboard: true},
    {title:"Нов периодичен превод", dashboard: true},
    {title:"Плащания към СЕБРА", dashboard: true},
    {title:"Кредитен превод CY", dashboard: true},
    {title:"Вътрешноклонов превод CY", line: true, dashboard: true},
    {title:"Покупка/продажба на валута", section:"Покупка/продажба на ваута", dashboard: true},
    {title:"Договаряне на курс", line: true, dashboard: true},
    {title:"Регистър на пер. преводи", section: "Регистри",dashboard: true},
    {title:"Получатели за преводи", dashboard: true},
]

export const withdrawals: IDropDownFieldConfig[] = [
    {title: "Извлечение по сметка", dashboard: true},
    {title: "Извлечение по кредитна карта", dashboard: true}
] 

export const services: IDropDownFieldConfig[] = [
    {title: "Отчети по e-mail за сметка", dashboard: true},
    {title: "Извлечения по e-mail за карти", dashboard: true},
    {title: "Картови авторизации по e-mail", dashboard: true},
    {title: "Преводи по SWIFT по e-mail", dashboard: true}
]

export const publicServices: IDropDownFieldConfig[] = [
    {title: "Задължения очакващи плащания", section: "Плащане на задължения", dashboard: true},
    {title: "Плащане на задължения", dashboard: true},
    {title: "Плащане на общински данъци и такси", dashboard: true},
    {title: "Еднократно плащане", line: true, dashboard: true},
    {title: "Добавяне на абонатна сметка", section: "Абонатни сметки", dashboard: true},
    {title: "Регистрирани абонатни сметки", line: true, dashboard: true},
    {title: "Известия по e-mail", dashboard: true},
    {title: "История на плащания", section: "Други", dashboard: true}
]

export const declarations: IDropDownFieldConfig[] = [
    {title: "Декларация в НОИ", dashboard: true},
    {title: "Статистическа форма 100 000 лв.", dashboard: true},
    {title: "Декларация за произход на средствата", dashboard: true},
    {title: "Декларация за презгранични преводи", dashboard: true}
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