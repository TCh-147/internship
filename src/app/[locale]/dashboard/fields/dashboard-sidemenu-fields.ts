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
    dropDownFields?: IDropDownFieldConfig[],
    icon?: string
}

// -------------- DASHBOARD SIDE MENU FIELDS ---------------

export const sideMenuMainFields: FieldConfig[] = [
    {title: "Main.home", icon: "pieChart"},
    {title: "Main.inquiries", dropDown: true, dropDownFields: inquiriesDropDownFields, icon: "text"},
    {title: "Main.purchases", dropDown: true, dropDownFields: purchasesDropDownFields, icon: "payment"},
    {title: "Main.withdrawals", dropDown: true, dropDownFields: withdrawalsDropDownFields, icon: "withdrawals"},
    {title: "Main.accounts", icon: "accounts"},
    {title: "Main.deposits", icon: "deposit"},
    {title: "Main.cards", icon: "card"},
    {title: "Main.forSignature", icon: "signature"},
    {title: "Main.submittedDocuments", icon: "signedDocuments"},
    {title: "Main.services", dropDown: true, dropDownFields: servicesDropDownFields, icon: "services"},
    {title: "Main.publicServices", dropDown: true, dropDownFields: publicServicesDropDownFields, icon: "utilities"},
    {title: "Main.declarations", dropDown: true, dropDownFields: declarationsDropDownFields, icon: "declarations"}
]

export const sideMenuAdditionalFields: FieldConfig[] = [
    {title: "Additional.help", icon: "information"},
    {title: "Additional.site", icon: "monitor"},
    {title: "Additional.mobileApp", icon: "touchScreenPhone"},
]

export const sideMenuInfoFields: FieldConfig[] = [
    {title: "Info.branches", icon:"bank"},
    {title: "Info.atms", icon: "atm"},
    {title: "Info.currencyRates", icon: "stocks"},
    {title: "Info.news", icon: "news"},
    {title: "Info.promotions", icon: "promotion"}
]