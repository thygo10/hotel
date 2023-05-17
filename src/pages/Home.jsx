import Form from '../components/Form/Form';
import  Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Destaque from '../components/Destaque/Destaque';
import Footer from '../components/Footer/Footer';
import MoreResorts from '../components/MoreResorts/MoreResorts';

function Home() {
  return (
    <>
      <div className="container mx-auto overflow-hidden flex flex-col bg-gray-50">
      <Header/>
      
      <Hero />
      <Destaque/>
      <MoreResorts/>
      <div className="container lg:max-w-5xl max-w-8xl  py-20 mx-auto items-center flex justify-center">
      <Form />
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default Home;
