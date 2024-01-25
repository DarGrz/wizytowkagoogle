import Image from "next/image"
import headerPic from '@/public/images/wizytowka-google.png'
import Link from "next/link"


const Header = () => {
  return (
    <div className="container justify-between items py-12 md:py-24 mb-10  md:flex">
        <div className="flex flex-col justify-center gap-3 flex-1 z-10">
            <h1 className="text-4xl text-center md:text-left md:text:6xl lg:text-7xl font-bold main-text-gradient">Twoja Wizytówka Google na Pierszym Miejscu</h1>
            <p className="text-sm md:text-xl text-center md:text-left">Zajmę się Twoją wizytówką Google zgodnie z najnowszymi zasadami.</p>
            
        </div>
        <div className="mx-auto justify-center items-center flex-1 mt-5 md:mt-auto w-3/4">
            <Image src={headerPic} width={600} height={600} alt={'Wizytówka Google główne zdjęcie'} />
        </div>
    </div>
  )
}

export default Header