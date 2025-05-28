import { 
    IDropDownFieldConfig, 
    inquiriesDropDownFields, 
    purchasesDropDownFields, 
    withdrawalsDropDownFields, 
    servicesDropDownFields, 
    publicServicesDropDownFields, 
    declarationsDropDownFields 
} from "app/components/common/dropdown-fields"

export interface FieldConfig{
    title: string
    dropDown?: boolean
    dropDownFields?: IDropDownFieldConfig[]
}

// -------------- DASHBOARD SIDE MENU FIELDS ---------------

export const sideMenuMainFields: FieldConfig[] = [
    {title: "Main.home"},
    {title: "Main.inquiries", dropDown: true, dropDownFields: inquiriesDropDownFields},
    {title: "Main.purchases", dropDown: true, dropDownFields: purchasesDropDownFields},
    {title: "Main.withdrawals", dropDown: true, dropDownFields: withdrawalsDropDownFields},
    {title: "Main.accounts"},
    {title: "Main.deposits"},
    {title: "Main.cards"},
    {title: "Main.forSignature"},
    {title: "Main.submittedDocuments"},
    {title: "Main.services", dropDown: true, dropDownFields: servicesDropDownFields},
    {title: "Main.publicServices", dropDown: true, dropDownFields: publicServicesDropDownFields},
    {title: "Main.declarations", dropDown: true, dropDownFields: declarationsDropDownFields}
]

export const sideMenuAdditionalFields: FieldConfig[] = [
    {title: "Additional.help"},
    {title: "Additional.site"},
    {title: "Additional.mobileApp"},
]

export const sideMenuInfoFields: FieldConfig[] = [
    {title: "Info.branches"},
    {title: "Info.atms"},
    {title: "Info.currencyRates"},
    {title: "Info.news"},
    {title: "Info.promotions"}
]