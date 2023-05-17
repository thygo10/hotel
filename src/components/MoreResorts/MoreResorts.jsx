
import shadow from '../../assets/image-shadow.png';
import hotel1 from '../../assets/hotel-1.jpeg';
import hotel2 from '../../assets/hotel-2.jpeg';
import hotel3 from '../../assets/hotel-3.jpeg';
import hotel4 from '../../assets/hotel-4.jpeg';


export default function MoreResorts() {
  return(
    <>
     <section className="container md:max-w-5xl lg:max-w-8xl  mx-auto px-4">
        
          <h3 className="text-2xl text-center text-gray-500 font-semibold mb-8">Conheça mais resorts</h3>
          
        <div className="container flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-6">
            <div className="relative row-span-2 col-span-2">
              <div className="absolute text bottom-0 pl-4 pb-4 text-white z-20 ">Beach Park Resort</div>
              <img className="absolute bottom-0 left-0 h-20 z-10 " src={shadow} alt="" />
              <img className=" w-full h-full object-cover" src={hotel1} alt="" />
            </div>

            <div className="relative col-span-2">
              <div className="absolute text bottom-0 pl-4 pb-4 text-white z-20 ">Salinas do Maragogi Resort</div>
              <img className="absolute bottom-0 left-0 h-20 z-10 " src="src/assets/image-shadow.png" alt="" />
              <img className="w-full h-full object-cover" src={hotel2} alt="" />
            </div>

            <div className="relative container">
              <div className="absolute bottom-0 pl-4 pb-4 text-white z-20 ">Grand Palladium</div>
              <img className="absolute bottom-0 left-0 h-20 z-10 " src="src/assets/image-shadow.png" alt="" />
              <img className=" w-full h-full object-cover" src={hotel3} alt="" />
            </div>

            <div className="relative">
              <div className="absolute bottom-0 pl-4 pb-4 text-white z-20 ">Arraial d'Ajuda Eco Resort</div>
              <img className="absolute bottom-0 left-0 h-20 z-10 " src="src/assets/image-shadow.png" alt="" />
              <img className="w-full h-full object-cover" src={hotel4} alt="" />
            </div>

          </div>
      </section>
    </>
  )
}