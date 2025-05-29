import { useTranslations } from "next-intl"
import BankIcon from "../icons/bank"
import ATMIcon from "../icons/atm"
import PhoneIcon from "../icons/phone"
import EmailIcon from "../icons/email"
import ChatIcon from "../icons/chat"
import { useState } from "react"

export default function FooterMoreInfo(){
  const [hover, setHover] = useState("")
  const t = useTranslations('FooterAdditional')

    return(
        <footer className=" bg-gray-50">

          <div className="w-3/5 m-auto text-center text-gray-600">
            <h3 className="mb-4 mt-6 text-gray-700 font-semibold">{t('Text.questions')}</h3>
            <div className="flex flex-row justify-center items-center m-auto">
              <PhoneIcon className="w-5 mr-2"/><p className="pr-10">{t('Info.phone.label')}<span className="font-semibold text-blue-700">{t('Info.phone.number')}</span>{t('Info.phone.allDay')}</p>
              <EmailIcon className="w-5 mr-2"/><p className="pr-10">{t('Info.email.label')}<span className="font-semibold text-blue-700">{t('Info.email.address')}</span></p>
              <ChatIcon className={`w-5 mr-2 ${hover === "chat" ? "fill-blue-600" : "fill-[#4a5568]"}`}/><div onMouseEnter={() => setHover("chat")} onMouseLeave={() => setHover("")} className="pr-10 hover:text-blue-700 hover:underline hover:cursor-pointer">{t('Info.chat.label')}<span className="font-semibold text-blue-600">{t('Info.chat.contactUs')}</span></div>
            </div>

            <p className="my-4 text-xs">{t('Text.callTax')}</p>

            <h3 className="text-gray-700 font-semibold">{t('Text.findUs')}</h3>
            <div className="flex flex-row justify-center m-auto my-4">
              <div onMouseEnter={() => setHover("bank")} onMouseLeave={() => setHover("")} className="flex flex-row items-center px-4 after:content-['>'] after:pl-1 after:align-center border-r-2 border-gray-300 hover:cursor-pointer hover:text-blue-700 hover:underline"><BankIcon className={`w-6 mr-2 ${hover === "bank" ? "fill-blue-600" : "fill-[#4a5568]"}`}/>{t('Where.branch')}</div>
              <div onMouseEnter={() => setHover("atm")} onMouseLeave={() => setHover("")} className="flex flex-row items-center px-4 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:text-blue-700 hover:underline"><ATMIcon className={`w-6 mr-2 ${hover === "atm" ? "text-blue-600" : "text-[#4a5568]"}`}/>{t('Where.atms')}</div>
            </div>
          </div>

        </footer>
    )
}