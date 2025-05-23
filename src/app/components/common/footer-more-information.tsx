export default function FooterMoreInfo(){
    return(
        <footer className=" bg-gray-50">

          <div className="w-3/5 m-auto text-center text-gray-600">
            <h3 className="mb-4 mt-6 text-gray-700 font-semibold">За всички въпроси нашите служители Ви очакват на:</h3>
            <div className="flex flex-row justify-center m-auto">
              <p className="px-10">Телефон: <span className="font-semibold text-blue-700">0700 21 7777 </span> (денонощно)*</p>
              <p className="px-10">E-mail: <span className="font-semibold text-blue-700">e-bank@fibank.bg</span></p>
              <div className="px-10 hover:text-blue-700 hover:underline hover:cursor-pointer">Чат: <span className="font-semibold text-blue-600">Пишете ни</span></div>
            </div>
            <p className="my-4 text-xs">* Разговорите към национален номер се таксуват според определените от Вашия оператор цени за обаждания към монер тип 0700
              Vivacom. За абонати на Vivacom обаждане към този номер се таксува като обаждане към стационарен номер в мрежата на Vivacom.
            </p>
            <h3 className="text-gray-700 font-semibold">Вижте къде се намираме:</h3>
            <div className="flex flex-row justify-center m-auto my-4">
              <div className="px-4 after:content-['>'] after:pl-1 after:align-center border-r-2 border-gray-300 hover:cursor-pointer hover:text-blue-700 hover:underline">Клонове</div>
              <div className="px-4 after:content-['>'] after:pl-1 after:align-center hover:cursor-pointer hover:text-blue-700 hover:underline">Банкомати</div>
            </div>
          </div>

        </footer>
    )
}