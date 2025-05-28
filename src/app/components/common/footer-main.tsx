import { useTranslations } from "next-intl"

export default function FooterMain(){

  const t = useTranslations('FooterMain');

    return(
        <footer className=" bg-gray-100">

          <div className="text-[13.5px] text-center pt-4">
            <ul className="flex flex-row justify-center m-auto">
              <li className="px-4 border-r-2 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">{t('account')}</li>
              <li className="px-4 border-r-2 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">{t('sso')}</li>
              <li className="px-4 border-r-2 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">{t('registration')}</li>
              <li className="px-4 border-r-2 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">{t('signature')}</li>
              <li className="px-4 border-r-2 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">{t('taxesFees')}</li>
              <li className="px-4 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">{t('documents')}</li>
            </ul>
            <p className="pt-4 before:content-['©'] before:pr-1 before:align-center">{t('copyright')}</p>
          </div>

        </footer>
    )
}