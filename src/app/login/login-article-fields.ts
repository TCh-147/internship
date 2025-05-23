export interface FieldConfig{
    title: string;
    description: string;
    moreInfo: string;
}

export const loginArticleFields: FieldConfig[] = [
    {title: "ВАЖНО!", description: "ПИБ АД УВЕДОМЯВА КАРТОДЪРЖАТЕЛИТЕ си, че има информация за получени фалшиви съобщения по електронната поща, които...", moreInfo: "Прочетете повече"},
    {title: "Разгледайте системата", description: "Разгледайте и усетете онлайн банкирането чрез интерактивната ни демо версия.", moreInfo: "ДЕМО ВЕРСИЯ"},
    {title: "Банкиране с Token", description: "Мобилност, удобство и сигурност в едно, с нашето Token истройство за генериране на еднократни пароли за вход", moreInfo: "Научете повече"}
]