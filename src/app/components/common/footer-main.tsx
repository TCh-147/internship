export default function FooterMain(){
    return(
        <footer className=" bg-gray-100">

          <div className="text-[13.5px] text-center pt-4">
            <ul className="flex flex-row justify-center m-auto">
              <li className="px-4 border-r-2 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">Как да добавя сметка</li>
              <li className="px-4 border-r-2 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">Всичко с един потребител (SSO)</li>
              <li className="px-4 border-r-2 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">Процес на регистрация</li>
              <li className="px-4 border-r-2 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">Електронен подпис</li>
              <li className="px-4 border-r-2 border-gray-300 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">Такси и комисиони</li>
              <li className="px-4 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:underline">Документи</li>
            </ul>
            <p className="pt-4 before:content-['©'] before:pr-1 before:align-middle">Първа инвестиционна банка 2009-2015.</p>
          </div>

        </footer>
    )
}