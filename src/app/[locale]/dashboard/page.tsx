'use client'

import FooterMain from "app/components/common/footer-main"
import SideMenu from "./dasborad-menu-fields"
import Accounts from "./dashboard-accounts-sum"
import ModuleTopRow from "./dashboard-module-table"
import DashboardNav from "./dashboard-navigation"
import { accountsSumField } from "./fields/dashboard-accounts-sum-fields"
import { accountFields, forSignatureFields, cardsFields, awaitingPayments, lastFiveFields, creditsFields, depositFields } from "./fields/dashboard-modules-fields"
import { sideMenuMainFields, sideMenuInfoFields, sideMenuAdditionalFields } from "./fields/dashboard-sidemenu-fields"
import { useTranslations } from "next-intl"

export default function Dashboard(){
    const t = useTranslations('Dashboard')

    return(
        <div className="bg-gray-100">
            <DashboardNav/>

            <div className="my-2 m-auto w-5/6 grid grid-cols-4 bg-white">
                <div className="row-span-full border-r-1 border-gray-300">
                    <p className="px-4 py-2 text-[#808080]">{t('Page.date')}: 20/Яну/2015</p>
                    <div className="px-4 py-2">
                        <p>Image</p>
                        <p>{t('Page.user')}:</p>
                        <p>{t('Page.firstName')} {t('Page.lastName')}</p>
                    </div>
                    <hr className="mt-2 pb-4 text-gray-300"/>
                    <button className="bg-red-500 w-full p-2 rounded-xs text-sm uppercase text-white">{t('Menu.button')}</button>
                    {
                        sideMenuMainFields.map(({title, dropDown, dropDownFields}) => (
                            <SideMenu key={title} title={title} dropDown={dropDown} dropDownFields={dropDownFields}/>
                        ))
                    }
                    <hr className="mt-2 pb-4 text-gray-300"/>
                    <h2 className="p-4 px-6 pb-2 text-base uppercase text-[#808080]">{t('Menu.information')}</h2>
                    {
                        sideMenuInfoFields.map(({title}) => (
                            <SideMenu key={title} title={title}/>
                        ))
                    }
                    <hr className="mt-2 pb-4 text-gray-300"/>
                    <h2 className="p-4 px-6 pb-2 text-base uppercase text-[#808080]">{t('Menu.additional')}</h2>
                    {
                        sideMenuAdditionalFields.map(({title}) => (
                            <SideMenu key={title} title={title} />
                        ))
                    }
                </div>
                <div className="col-span-3">
                    <p className="py-2 px-4 border-b-1 border-gray-300 text-gray-500">{t('Page.main')}</p>
                    <div className="grid grid-cols-3">
                       {
                        accountsSumField.map(({title, sum, currency}) => {
                            return <Accounts key={title} title={title} sum={sum} currency={currency} />
                        })
                       }
                       
                    </div>
                    <div className="flex flex-row">
                        {
                            accountFields.map(({title}) => {
                                return <ModuleTopRow key={title} title={title} />
                            })
                        } 
                    </div>
                    <div className="flex flex-row">
                        {
                            forSignatureFields.map(({title}) => {
                                return <ModuleTopRow key={title} title={title} />
                            })
                        } 
                    </div>
                    <div className="flex flex-row">
                        {
                            cardsFields.map(({title}) => {
                                return <ModuleTopRow key={title} title={title} />
                            })
                        } 
                    </div>
                    <div className="flex flex-row">
                        {
                            awaitingPayments.map(({title}) => {
                                return <ModuleTopRow key={title} title={title} />
                            })
                        } 
                    </div>
                    <div className="flex flex-row">
                        {
                            lastFiveFields.map(({title}) => {
                                return <ModuleTopRow key={title} title={title} />
                            })
                        } 
                    </div>
                    <div className="flex flex-row">
                        {
                            creditsFields.map(({title}) => {
                                return <ModuleTopRow key={title} title={title} />
                            })
                        } 
                    </div>
                    <div className="flex flex-row">
                        {
                            depositFields.map(({title}) => {
                                return <ModuleTopRow key={title} title={title} />
                            })
                        } 
                    </div>
                </div>
                
            </div>

            <FooterMain/>
        </div>
    )
}