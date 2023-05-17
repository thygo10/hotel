import Form from '../Form/Form'

export default function Hero(){
  return(
    <>
    <div className="container lg:max-w-5xl max-w-8xl  flex bg-[url('src/assets/bg1.png')] flex-col space-y-3 justify-center mx-auto bg-cover h-96 items-center bg-no-repeat">
        <div className="text-white text-center mb-10">
          <h2 className="text-4xl text-gray-50">Onde você quer ir?</h2>
          <p className='text-xl py-2'>Escolha o estado e cidade para achar os melhores resorts</p>
        </div>
        <Form />
      </div>
    </>
  )
}