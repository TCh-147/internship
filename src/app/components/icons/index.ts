import React from "react";
import { documentIcon } from "./document";
import { secureDocumentIcon } from "./secure-document";
import { questionMarkIcon } from "./question-mark";
import { phoneIcon } from "./phone";
import { emailIcon } from "./email";
import { chatIcon } from "./chat";
import { pieChartIcon } from "./pie-chart";
import { textIcon } from "./text";
import { paymentIcon } from "./payment";
import { withdrawalsIcon } from "./extracting-money";
import { accountsIcon } from "./accounts";
import { depositIcon } from "./money-safe";
import { cardIcon } from "./card";
import { signatureIcon } from "./signature";
import { signedDocumentsIcon } from "./signed-documents";
import { servicesIcon } from "./services";
import { utilitiesIcon } from "./utilities";
import { declarationsIcon } from "./declarations";
import { atmIcon } from "./atm";
import { bankIcon } from "./bank";
import { stocksIcon } from "./stocks";
import { newsIcon } from "./news";
import { promotionIcon } from "./promotion";
import { informationIcon } from "./information";
import { monitorIcon } from "./monitor";
import { touchScreenPhoneIcon } from "./touch-phone";
import { settingsIcon } from "./settings";

export const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> ={
    document: documentIcon,
    secureDocument: secureDocumentIcon,
    questionMark: questionMarkIcon,
    phone: phoneIcon,
    email: emailIcon,
    chat: chatIcon,
    pieChart: pieChartIcon,
    text: textIcon,
    payment: paymentIcon,
    withdrawals: withdrawalsIcon,
    accounts: accountsIcon,
    deposit: depositIcon,
    card: cardIcon,
    signature: signatureIcon,
    signedDocuments: signedDocumentsIcon,
    services: servicesIcon,
    utilities: utilitiesIcon,
    declarations: declarationsIcon,
    atm: atmIcon,
    bank: bankIcon,
    stocks: stocksIcon,
    news: newsIcon,
    promotion: promotionIcon,
    touchScreenPhone: touchScreenPhoneIcon,
    information: informationIcon,
    monitor: monitorIcon,
    settings: settingsIcon
}