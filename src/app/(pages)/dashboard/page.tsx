'use client'

import MenuFields from "app/components/dasborad-menu-fields"
import DashboardNav from "app/components/dashboard-navigation"
import { fieldsAdditional } from "app/components/fields/dashboard-additional- fields"
import { fieldsInfo } from "app/components/fields/dashboard-info-fields"
import { fieldsMain } from "app/components/fields/dashboard-main-fields"
import FooterMain from "app/components/footer-main"

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
                        fieldsMain.map(({title, dropDown, dropDownFields}) => (
                            <MenuFields key={title} title={title} dropDown={dropDown} dropDownFields={dropDownFields}/>
                        ))
                    }
                    <hr className="mt-2 pb-4 text-gray-300"/>
                    <h2 className="p-4 px-6 pb-2 text-base uppercase text-[#808080]">Информация за Fibank</h2>
                    {
                        fieldsInfo.map(({title}) => (
                            <MenuFields key={title} title={title}/>
                        ))
                    }
                    <hr className="mt-2 pb-4 text-gray-300"/>
                    <h2 className="p-4 px-6 pb-2 text-base uppercase text-[#808080]">Допълнително</h2>
                    {
                        fieldsAdditional.map(({title}) => (
                            <MenuFields key={title} title={title} />
                        ))
                    }
                </div>
                <div className="col-span-3">
                    <p className="py-2 px-4 border-b-1 border-gray-300 text-gray-500">Начало</p>
                </div>
            </div>

            <FooterMain/>
        </div>
    )
}