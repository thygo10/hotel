import insta from '../../assets/instagram.png';
import facebook from '../../assets/facebook1.png';
import whats from '../../assets/whatsapp.png';


export default function Footer(){

  return(
    <>
<div className=" border-t border-gray-400">
<div className=" container lg:max-w-5xl max-w-8xl  mx-auto px-4 flex items-center justify-center">
<h2 className="text-5xl">logo</h2>
<div className="flex justify-center items-center mx-auto gap-5">
<a href="#"><img className="" src={facebook} width={40} height={40} alt="" /></a>
<a href="#"><img className="" src={insta} width={40} height={40} alt="" /></a>
<a href="#"><img className="" src={whats} width={40} height={40} alt="" /></a>
</div>
</div>
</div>

</>
  )
}