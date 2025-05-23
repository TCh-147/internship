'use client'

import SideMenu from "app/dashboard/dasborad-menu-fields"
import DashboardNav from "app/dashboard/dashboard-navigation"
import FooterMain from "app/components/common/footer-main"
import ModuleTopRow from "app/dashboard/dashboard-module-table"
import Accounts from "app/dashboard/dashboard-accounts-sum"
import { accountsSumField } from "./fields/dashboard-accounts-sum-fields"
import { accountFields, forSignatureFields, cardsFields, awaitingPayments, lastFiveFields, creditsFields, depositFields } from "./fields/dashboard-modules-fields"
import { sideMenuMainFields, sideMenuInfoFields, sideMenuAdditionalFields } from "./fields/dashboard-sidemenu-fields"

export default function Dashboard(){

    return(
        <div className="bg-gray-100">
            <DashboardNav/>

            <div className="my-2 m-auto w-5/6 grid grid-cols-4 bg-white">
                <div className="row-span-full border-r-1 border-gray-300">
                    <p className="px-4 py-2 text-[#808080]">Счетоводна дата: 20/Яну/2015</p>
                    <div className="px-4 py-2">
                        <p>Image</p>
                        <p>Потребител:</p>
                        <p>Филип Филипов</p>
                    </div>
                    <hr className="mt-2 pb-4 text-gray-300"/>
                    <button className="bg-red-500 w-full p-2 rounded-xs text-sm uppercase text-white">Нов превод</button>
                    {
                        sideMenuMainFields.map(({title, dropDown, dropDownFields}) => (
                            <SideMenu key={title} title={title} dropDown={dropDown} dropDownFields={dropDownFields}/>
                        ))
                    }
                    <hr className="mt-2 pb-4 text-gray-300"/>
                    <h2 className="p-4 px-6 pb-2 text-base uppercase text-[#808080]">Информация за Fibank</h2>
                    {
                        sideMenuInfoFields.map(({title}) => (
                            <SideMenu key={title} title={title}/>
                        ))
                    }
                    <hr className="mt-2 pb-4 text-gray-300"/>
                    <h2 className="p-4 px-6 pb-2 text-base uppercase text-[#808080]">Допълнително</h2>
                    {
                        sideMenuAdditionalFields.map(({title}) => (
                            <SideMenu key={title} title={title} />
                        ))
                    }
                </div>
                <div className="col-span-3">
                    <p className="py-2 px-4 border-b-1 border-gray-300 text-gray-500">Начало</p>
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