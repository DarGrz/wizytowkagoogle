import Image from "next/image"
import headerPic from '@/public/images/wizytowka-google.png'
import { FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link"


const Header = () => {
  return (
    <div className="container justify-between items-center items py-12 md:py-24  md:flex flex-col">
        <div className="flex flex-col justify-center gap-3 flex-1 mb-10 md:mb-20 text-center">
            <h1 className="text-4xl  text-center  md:text:6xl lg:text-9xl font-bold main-text-gradient">PROWADZENIE WIZYTÓWEK GOOGLE</h1>
            <p className="text-xl md:text-5xl md:my-10 text-center text-gray-700 -z-10">Twoja Firma w Top 3 w wynikach wyszukiwania</p>
            <div>
              <div className="mt-5 hover:scale-110 h-100 text-4xl flex justify-center items-center">
                <div className="text-6xl text-violet-500 ">
                  <FaPhoneVolume />
                </div> 
              <a href="tel:572 275 002" className=" flex items-center main-text-gradient justify-center gap-5 md:text-5xl font-bold text-center -z-10  px-5 py-3">
              +48 572 275 002
              </a>
            </div> 
        </div>
        </div>
        
        <div className="md:w-max">
            <Image src={headerPic} width={600} height={600} alt={'Wizytówka Google główne zdjęcie'} />
        </div>
    </div>
  )
}

export default Header