export default function FooterMain(){
    return(
        <footer className=" bg-gray-100">

          <div className="text-[13.5px] text-center pt-4">
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
    )
}