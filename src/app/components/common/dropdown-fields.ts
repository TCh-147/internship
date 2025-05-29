export interface IDropDownFieldConfig{
    title: string
    section?: string
    line?: boolean
    icon?: string
}

// -------------- MAIN NAVIGATION HELP FIELDS ---------------

export const helpDropDownFields: IDropDownFieldConfig[] = [
    {title: "MainNavHelp.Titles.articles", section: "MainNavHelp.Sections.information", icon: "document"},
    {title: "MainNavHelp.Titles.fqa", icon: "questionMark"},
    {title: "MainNavHelp.Titles.security", line: true, icon: "secureDocument"},
    {title: "MainNavHelp.Titles.phone", section: "MainNavHelp.Sections.contact", icon: "phone"},
    {title: "MainNavHelp.Titles.email", icon: "email"},
    {title: "MainNavHelp.Titles.chat", icon: "chat"},
]

// -------------- DASHBOARD SIDE MENU FIELDS ---------------

export const inquiriesDropDownFields: IDropDownFieldConfig[] = [
    {title:"DashboardSideMenu.Inquiries.Titles.posGroups"},
    {title:"DashboardSideMenu.Inquiries.Titles.posPeriod"},
    {title:"DashboardSideMenu.Inquiries.Titles.balanceSSO"},
    {title:"DashboardSideMenu.Inquiries.Titles.dailyReport"},
    {title:"DashboardSideMenu.Inquiries.Titles.services"},
    {title:"DashboardSideMenu.Inquiries.Titles.sentSMS"},
    {title:"DashboardSideMenu.Inquiries.Titles.feesDue"},
    {title:"DashboardSideMenu.Inquiries.Titles.swift"},
    {title:"DashboardSideMenu.Inquiries.Titles.sessions"}
]

export const purchasesDropDownFields: IDropDownFieldConfig[] = [
    {title:"DashboardSideMenu.Purchases.Titles.newCreditTransfer", section: "DashboardSideMenu.Purchases.Sections.transfers"},
    {title:"DashboardSideMenu.Purchases.Titles.budgetPayment"},
    {title:"DashboardSideMenu.Purchases.Titles.directDebit"},
    {title:"DashboardSideMenu.Purchases.Titles.bulkTransfer"},
    {title:"DashboardSideMenu.Purchases.Titles.fileTransfers"},
    {title:"DashboardSideMenu.Purchases.Titles.newRecurringTransfer"},
    {title:"DashboardSideMenu.Purchases.Titles.sebraPayments"},
    {title:"DashboardSideMenu.Purchases.Titles.cyCreditTransfer"},
    {title:"DashboardSideMenu.Purchases.Titles.cyIntraBranchTransfer", line: true},
    {title:"DashboardSideMenu.Purchases.Titles.currencyExchange", section:"DashboardSideMenu.Purchases.Sections.currencyOperations"},
    {title:"DashboardSideMenu.Purchases.Titles.rateNegotiation", line: true},
    {title:"DashboardSideMenu.Purchases.Titles.recurringTransferRegister", section: "DashboardSideMenu.Purchases.Sections.registers"},
    {title:"DashboardSideMenu.Purchases.Titles.transferRecipients"},
]

export const withdrawalsDropDownFields: IDropDownFieldConfig[] = [
    {title: "DashboardSideMenu.Withdrawals.Titles.accountStatement"},
    {title: "DashboardSideMenu.Withdrawals.Titles.creditCardStatement"}
] 

export const servicesDropDownFields: IDropDownFieldConfig[] = [
    {title: "DashboardSideMenu.Services.Titles.emailAccountReports"},
    {title: "DashboardSideMenu.Services.Titles.emailCardStatements"},
    {title: "DashboardSideMenu.Services.Titles.emailCardAuthorizations"},
    {title: "DashboardSideMenu.Services.Titles.emailSwiftTransfers"}
]

export const publicServicesDropDownFields: IDropDownFieldConfig[] = [
    {title: "DashboardSideMenu.PublicServices.Titles.pendingPayments", section: "DashboardSideMenu.PublicServices.Sections.payDues"},
    {title: "DashboardSideMenu.PublicServices.Titles.payDues"},
    {title: "DashboardSideMenu.PublicServices.Titles.municipalTaxes"},
    {title: "DashboardSideMenu.PublicServices.Titles.oneTimePayment", line: true},
    {title: "DashboardSideMenu.PublicServices.Titles.addSubscriberAccount", section: "DashboardSideMenu.PublicServices.Sections.subscriberAccounts"},
    {title: "DashboardSideMenu.PublicServices.Titles.registeredSubscribers", line: true},
    {title: "DashboardSideMenu.PublicServices.Titles.emailNotifications"},
    {title: "DashboardSideMenu.PublicServices.Titles.paymentHistory", section: "DashboardSideMenu.PublicServices.Sections.other"}
]

export const declarationsDropDownFields: IDropDownFieldConfig[] = [
    {title: "DashboardSideMenu.Declarations.Titles.noiDeclaration"},
    {title: "DashboardSideMenu.Declarations.Titles.statisticalForm100k"},
    {title: "DashboardSideMenu.Declarations.Titles.fundOriginDeclaration"},
    {title: "DashboardSideMenu.Declarations.Titles.crossBorderTransferDeclaration"}
]

// -------------- DASHBOARD NAVIGATION FIELDS ---------------

export const settingsDashboardNavFields: IDropDownFieldConfig[] = [
    {title: "DashboardNav.Settings.Titles.personal"},
    {title: "DashboardNav.Settings.Titles.general"},
    {title: "DashboardNav.Settings.Titles.account"},
    {title: "DashboardNav.Settings.Titles.deposit"},
    {title: "DashboardNav.Settings.Titles.card"},
    {title: "DashboardNav.Settings.Titles.card3dSecure"},
    {title: "DashboardNav.Settings.Titles.password"},
    {title: "DashboardNav.Settings.Titles.certRegister"},
    {title: "DashboardNav.Settings.Titles.qesRegister"},
    {title: "DashboardNav.Settings.Titles.tokenPin"},
    {title: "DashboardNav.Settings.Titles.emailSms"},
    {title: "DashboardNav.Settings.Titles.cardSms"},
    {title: "DashboardNav.Settings.Titles.mobileApp"}
]