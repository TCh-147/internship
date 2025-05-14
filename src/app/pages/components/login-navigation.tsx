import Link from "next/link";

export default function LoginNav(){
    return(
        <nav className="border-b-2 border-gray-300">
        <ul className="list-none grid w-full grid-cols-7 justify-between text-base">
          <li className="p-4">Logo</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">English</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">Към сайта</li>
          <li className="justify-self-center self-center p-4 text-center hover:cursor-pointer">Мобилно приложение</li>
          <li className="justify-self-center self-center p-4 text-center hover:cursor-pointer">Промени в Оу и тарифа</li>
          <li className="justify-self-center self-center p-4 hover:cursor-pointer">Помощ</li>
          <li className="justify-self-center self-center p-2"><button className="p-2 px-4 uppercase text-sm bg-gray-200 hover:cursor-pointer"><Link href="/pages/register">Регистрация</Link></button></li>
        </ul>
      </nav>
    )
}