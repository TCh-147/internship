export interface FieldConfig{
    title: string
    sum: number
    currency: string
}

export const accountsSumField: FieldConfig[] = [
    {title: "Нетна разполагаема наличност по сметки и депозити:", sum: 50203000.03, currency: "BGN"},
    {title: "Общо текущо салдо по сметки и депозити: ", sum: 75000.00, currency: "BGN"},
    {title: "Обща нетна разполагаемост по картови сметки:", sum: 20000.00, currency: "BGN"}
]