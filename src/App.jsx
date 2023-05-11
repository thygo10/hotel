


function App() {
  return (
    <>
      <div className="bg-gray-50">
        <header className="flex justify-between mx-auto h-24 items-center py-4 px-4">
          <h2 className="text-5xl">logo</h2>
          <nav className="">
            <ul className="flex gap-6 mr-4 text-gray-500">
              <li className="text-md hover:underline hover:text-sky-500">
                <a href="#">Como reservar?</a>
              </li>
              <li className="text-md hover:underline hover:text-sky-500">
                <a href="#">Sobre nós</a>
              </li>
              <li className="text-md hover:underline hover:text-sky-500">
                <a href="#">Informações</a>
              </li>
              <li className="text-md hover:underline hover:text-sky-500">
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="container flex bg-[url('src/assets/bg1.png')] flex-col space-y-3 justify-center mx-auto bg-black bg-cover h-96 items-center bg-no-repeat">
        <div className="text-white text-center mb-10">
          <h2 className="text-4xl text-gray-50">Onde você quer ir?</h2>
          <p>Escolha o estado e cidade para achar os melhores resorts</p>
        </div>
        <form className="inline-flex ">
          <select className="px-3 py-2 rounded-md mx-3 text-gray-500" name="" id="estado">
            <option value="">Escolha o estado</option>
          </select>
          <select className="px-3 py-2 rounded-md mx-3 text-gray-500 " name="" id="estado">
            <option className="text-gray-50" value="">
              Escolha a cidade
            </option>
          </select>
          <button className="bg-yellow-500 text-yellow-900 px-3 mx-3 flex gap-2 hover:bg-yellow-300 transition duration-300 ease-in-out py-2 rounded-md">
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
      </div>
      <section>
        <div className="container mx-auto px-4 py-10 text-gray-600">
          <div className="flex">
            <div className="col-1 flex flex-col max-w-prose space-y-4">
              <div className="space-y-3">

              <h4 className="text-gray-400">Resort em Destaque</h4>
              <h4 className="text-3xl text-gray-700">Ecoresort Praia do Forte Bahia</h4>
              <p>Hotel qualidade 5 estrelas</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque id ipsa ex vel, a placeat explicabo
                officia doloribus ea deserunt corporis aliquid esse nobis, facilis non, sint error similique laudantium!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolores recusandae perferendis
                alias porro at omnis quidem bla.
              </p>

              </div>
             <div className='mt-1'>
             <button className="bg-yellow-500 w-fit text-yellow-900 px-3 mt-7 flex gap-4 hover:bg-yellow-300 transition duration-300 ease-in-out py-2 rounded-md">
                {' '}
                Solicitar reserva
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
             </div>
              
            </div>

            <div className="flex-shrink-0 col-2 ml-auto">
              
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="src/assets/c1.jpg" className="w-96" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="src/assets/c2.jpg" className="w-96" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="src/assets/c3.jpg" className="w-96" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="src/assets/c4.jpg" className="w-96"  />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
          </div>
        </div></div>
      </section>
  
    
    </>
  )
}

export default App;
