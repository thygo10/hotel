

export default function Form(){
  return(
    <>
    <form className="lg:grid lg:grid-cols-2 mx-8 items-center justify-center flex flex-col lg:space-y-0 space-y-5 lg:gap-4 gap-2">
          <select className="px-4 py-2 text-xl rounded-md lg:text-lg text-gray-500" name="" id="estado">
            <option value="">Escolha o estado</option>
          </select>
          <select className="px-4 py-2 text-xl rounded-md lg:text-lg text-gray-500 " name="" id="estado">
            <option className="text-gray-50 " value="">
              Escolha a cidade
            </option>
          </select>
          <button className="bg-yellow-500 text-yellow-900 justify-center col-span-2 px-3 mx-3 lg:mt-4 flex gap-2 hover:bg-yellow-300 transition duration-300 ease-in-out py-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            Pesquisar resorts
          </button>
        </form>
    </>
  )
}