import Image from "next/image"
import headerPic from '@/public/images/wizytowka-google.png'
import Link from "next/link"


const Header = () => {
  return (
    <div className="container justify-between items-center items py-12 md:py-24  md:flex flex-col">
        <div className="flex flex-col justify-center gap-3 flex-1 mb-10 md:mb-20 text-center">
            <h1 className="text-4xl  text-center  md:text:6xl lg:text-9xl font-bold main-text-gradient">ZARZĄDZANIE WIZYTÓWKAMI GOOGLE</h1>
            <p className="text-xl md:text-5xl md:my-10 text-center opacity-70 -z-10">Wypromuj swoją firmę w Mapach Google i Wyszukiwarce.</p>
            <div>
              <div className="mt-5">
              <a href="tel:572 275 002" className="text-3xl md:text-5xl font-bold text-center opacity-70 -z-10 border-solid border-2 border-inherit px-5 py-3">
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