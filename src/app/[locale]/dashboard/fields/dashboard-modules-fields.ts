export interface FieldConfig {
    title: string
    checkbox?: boolean
}

// -------------- MODULES TABLE TOP FIELDS ---------------

export const accountFields: FieldConfig[] = [
    {title: "Account.account"},
    {title: "Account.currency"},
    {title: "Account.availability"},
    {title: "Account.forDayBalance"},
    {title: "Account.currentBalance"},
    {title: "Account.dueFees"},
    {title: "Account.actions"}
]

export const lastFiveFields: FieldConfig[] = [
    {title: "LastFiveFields.type"},
    {title: "LastFiveFields.date"},
    {title: "LastFiveFields.documentRef"},
    {title: "LastFiveFields.recipientSender"},
    {title: "LastFiveFields.account"},
    {title: "LastFiveFields.amountCurrency"},
]

export const depositFields: FieldConfig[] = [
    {title: "DepositFields.deposit"},
    {title: "DepositFields.currency"},
    {title: "DepositFields.availability"},
    {title: "DepositFields.accruedInterest"},
    {title: "DepositFields.maturity"},
    {title: "DepositFields.actions"}
]

export const forSignatureFields: FieldConfig[] = [
    {title: "ForSignatureFields.paymentType", checkbox: true},
    {title: "ForSignatureFields.payer"},
    {title: "ForSignatureFields.recipient"},
    {title: "ForSignatureFields.amountCurrency"}
]

export const cardsFields: FieldConfig[] = [
    {title: "CardsFields.card", checkbox: true},
    {title: "CardsFields.currency"},
    {title: "CardsFields.availableFunds"},
    {title: "CardsFields.liabilities"},
    {title: "CardsFields.minimumInstallment"},
    {title: "CardsFields.repayBy"},
    {title: "CardsFields.secure3d"}
]

export const awaitingPayments: FieldConfig[] = [
    {title: "AwaitingPayments.name", checkbox: true},
    {title: "AwaitingPayments.dueDate"},
    {title: "AwaitingPayments.autoPayment"},
    {title: "AwaitingPayments.amount"}
]

export const creditsFields: FieldConfig[] = [
    {title: "CreditsFields.creditType", checkbox: true},
    {title: "CreditsFields.currency"},
    {title: "CreditsFields.interestRate"},
    {title: "CreditsFields.dueInstallment"},
    {title: "CreditsFields.installmentDate"},
    {title: "CreditsFields.maturity"},
]