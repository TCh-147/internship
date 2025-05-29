export interface FieldConfig {
    column: string
    checkbox?: boolean
}

// -------------- MODULES TABLE TOP FIELDS ---------------

export const accountFields: FieldConfig[] = [
    {column: "Account.account"},
    {column: "Account.currency"},
    {column: "Account.availability"},
    {column: "Account.forDayBalance"},
    {column: "Account.currentBalance"},
    {column: "Account.dueFees"},
    {column: "Account.actions"}
]

export const lastFiveFields: FieldConfig[] = [
    {column: "LastFiveFields.type"},
    {column: "LastFiveFields.date"},
    {column: "LastFiveFields.documentRef"},
    {column: "LastFiveFields.recipientSender"},
    {column: "LastFiveFields.account"},
    {column: "LastFiveFields.amountCurrency"},
]

export const depositFields: FieldConfig[] = [
    {column: "DepositFields.deposit"},
    {column: "DepositFields.currency"},
    {column: "DepositFields.availability"},
    {column: "DepositFields.accruedInterest"},
    {column: "DepositFields.maturity"},
    {column: "DepositFields.actions"}
]

export const forSignatureFields: FieldConfig[] = [
    {column: "ForSignatureFields.paymentType", checkbox: true},
    {column: "ForSignatureFields.payer"},
    {column: "ForSignatureFields.recipient"},
    {column: "ForSignatureFields.amountCurrency"}
]

export const cardsFields: FieldConfig[] = [
    {column: "CardsFields.card", checkbox: true},
    {column: "CardsFields.currency"},
    {column: "CardsFields.availableFunds"},
    {column: "CardsFields.liabilities"},
    {column: "CardsFields.minimumInstallment"},
    {column: "CardsFields.repayBy"},
    {column: "CardsFields.secure3d"}
]

export const awaitingPayments: FieldConfig[] = [
    {column: "AwaitingPayments.name", checkbox: true},
    {column: "AwaitingPayments.dueDate"},
    {column: "AwaitingPayments.autoPayment"},
    {column: "AwaitingPayments.amount"}
]

export const creditsFields: FieldConfig[] = [
    {column: "CreditsFields.creditType", checkbox: true},
    {column: "CreditsFields.currency"},
    {column: "CreditsFields.interestRate"},
    {column: "CreditsFields.dueInstallment"},
    {column: "CreditsFields.installmentDate"},
    {column: "CreditsFields.maturity"},
]