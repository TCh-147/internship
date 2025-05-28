import { useTranslations } from "next-intl"

export default function FooterMoreInfo(){

  const t = useTranslations('FooterAdditional')

    return(
        <footer className=" bg-gray-50">

          <div className="w-3/5 m-auto text-center text-gray-600">
            <h3 className="mb-4 mt-6 text-gray-700 font-semibold">{t('Text.questions')}</h3>
            <div className="flex flex-row justify-center m-auto">
              <p className="px-10">{t('Info.phone.label')}<span className="font-semibold text-blue-700">{t('Info.phone.number')}</span>{t('Info.phone.allDay')}</p>
              <p className="px-10">{t('Info.email.label')}<span className="font-semibold text-blue-700">{t('Info.email.address')}</span></p>
              <div className="px-10 hover:text-blue-700 hover:underline hover:cursor-pointer">{t('Info.chat.label')}<span className="font-semibold text-blue-600">{t('Info.chat.contactUs')}</span></div>
            </div>

            <p className="my-4 text-xs">{t('Text.callTax')}</p>

            <h3 className="text-gray-700 font-semibold">{t('Text.findUs')}</h3>
            <div className="flex flex-row justify-center m-auto my-4">
              <div className="px-4 after:content-['>'] after:pl-1 after:align-center border-r-2 border-gray-300 hover:cursor-pointer hover:text-blue-700 hover:underline">{t('Where.branch')}</div>
              <div className="px-4 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:text-blue-700 hover:underline">{t('Where.atms')}</div>
            </div>
          </div>

        </footer>
    )
}