import f1 from '../../assets/featured-img.png';

export default function Destaque(){
  return(
    <>
     <div className='destaque'>
        <div className="container md:max-w-5xl lg:max-w-8xl  mx-auto px-4 py-10 text-gray-600">
          <div className="flex flex-col-reverse">
            <div className="col-1 flex flex-col space-y-4">
              <div className="space-y-3  flex ">
                <div className='flex flex-col space-y-3'>
                <img src={f1} alt="" />
                <h4 className="text-gray-400 py-2">Resort em Destaque</h4>
                <h4 className="text-3xl text-gray-700">Ecoresort Praia do Forte Bahia</h4>
                <p className='text-justify'>Hotel qualidade 5 estrelas</p>
                <p className='text-justify'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque id ipsa ex vel, a placeat explicabo
                  officia doloribus ea deserunt corporis aliquid esse nobis, facilis non, sint error similique
                  laudantium!
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolores recusandae perferendis
                  alias porro at omnis quidem bla.
                </p>
                </div>
              </div>
              <div className="mt-1 flex justify-center">
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
          </div>
        </div>
      </div>
    </>
  )
}