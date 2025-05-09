'use client'

import Link from "next/link";
import Login from "./pages/login/page";
import axios from "axios";

export default function Home() {


  return (
    <div className="grid">
      <nav className="border-b-2 border-gray-300">
        <ul className="list-none grid w-full grid-cols-7 justify-between text-base">
          <li className="p-4">Logo</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">English</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">Към сайта</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">Мобилно приложение</li>
          <li className="justify-self-center self-center p-4 text-center hover:cursor-pointer">Промени в Оу и тарифа</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">Помощ</li>
          <li className="justify-self-center self-center p-2"><button className="p-2 px-4 uppercase text-sm bg-gray-200 hover:cursor-pointer"><Link href="/pages/register">Регистрация</Link></button></li>
        </ul>
      </nav>

      <div className="grid grid-cols-2 items-center my-12">

        <Login></Login>

        <div className="w-80 mx-12">
          <h2 className="text-2xl">Title</h2>
          <p>Some info</p>
          <p className="after-arrow-symbol">Прочетете повече</p>
          <hr/>
        </div>

      </div>

        <footer className=" bg-gray-50">

          <div className="w-3/5 m-auto text-center text-gray-600">
            <h3 className="mb-4 mt-6 text-gray-700 font-semibold">За всички въпроси нашите служители Ви очакват на:</h3>
            <div className="flex flex-row justify-center m-auto">
              <p className="px-10">Телефон: <span className="font-semibold text-blue-600">0700 21 7777 </span> (денонощно)*</p>
              <p className="px-10">E-mail: <span className="font-semibold text-blue-600">e-bank@fibank.bg</span></p>
              <p className="px-10">Чат: <span className="font-semibold text-blue-600">Пишете ни</span></p>
            </div>
            <p className="my-4 text-xs">* Разговорите към национален номер се таксуват според определените от Вашия оператор цени за обаждания към монер тип 0700
              Vivacom. За абонати на Vivacom обаждане към този номер се таксува като обаждане към стационарен номер в мрежата на Vivacom.
            </p>
            <h3 className="text-gray-700 font-semibold">Вижте къде се намираме:</h3>
            <div className="flex flex-row justify-center m-auto my-4">
              <p className="px-4 after-arrow-symbol border-r-2 border-gray-300 hover:cursor-pointer">Клонове</p>
              <p className="px-4 after-arrow-symbol hover:cursor-pointer">Банкомати</p>
            </div>
          </div>
          
          <div className="bg-gray-100 text-[13.5px] text-center pt-4">
            <div className="flex flex-row justify-center m-auto">
              <p className="px-4 border-r-2 border-gray-300 after-arrow-symbol hover:cursor-pointer">Как да добавя сметка</p>
              <p className="px-4 border-r-2 border-gray-300 after-arrow-symbol hover:cursor-pointer">Всичко с един потребител (SSO)</p>
              <p className="px-4 border-r-2 border-gray-300 after-arrow-symbol hover:cursor-pointer">Процес на регистрация</p>
              <p className="px-4 border-r-2 border-gray-300 after-arrow-symbol hover:cursor-pointer">Електронен подпис</p>
              <p className="px-4 border-r-2 border-gray-300 after-arrow-symbol hover:cursor-pointer">Такси и комисиони</p>
              <p className="px-4 after-arrow-symbol">Документи</p>
            </div>
            <p className="before-copyright-symbol pt-4">Първа инвестиционна банка 2009-2015.</p>
          </div>

        </footer>
    </div>
  );
}
