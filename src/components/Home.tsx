import Image from "next/image";

import homeImg from "../..//public/homeimg2.png";
import solunyaLogo from "../..//public/solunya-white.png";

export function Home() {
  return (
    <main className="w-full  lg:h-[800px] h-[500px] bg-BackgroundBlue flex flex-rows">
      <div className="flex flex-col lg:basis-2/3 basis-full items-center lg:items-start justify-around md:ml-10">
        <div className="flex items-center">
          <Image
            src={solunyaLogo}
            alt="Imagem do logo da solunya"
            width={150}
          />
          <div>
            <p className="text-md font-bold text-[#fff]">SOLUNYA </p>
            <p className="text-md font-bold text-[#fff]">SOFTWARE HOUSE</p>
          </div>
        </div>

        <div>
          <p className="lg:text-8xl md:text-6xl lg:text-start text-center text-6xl text-[#fff]">
            Transformando ideias
          </p>
          <p className="lg:text-8xl md:text-6xl  lg:text-start text-center  sm:text-6xl font-bold text-[#fff]">
            em experiências digitais
          </p>
        </div>
        <button className="bg-BackgroundButton w-48 h-12 rounded-xl">
          Saiba mais
        </button>
      </div>

      <div className="hidden lg:flex  md:basis-1/3 h-full justify-center items-center">
        <Image className="hidden md:block" src={homeImg} alt="home image" />
      </div>
    </main>
  );
}
