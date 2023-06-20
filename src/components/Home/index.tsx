import Image from "next/image";

import solunyaLogo from "../../../public/solunya-white.png";
import { Carousel } from "./Carousel";

export function Home() {
  return (
    <main className="w-full  h-[800px]  bg-BackgroundBlue flex flex-col p-5 ">
      <div className="flex items-center md:mb-20 mb-5">
        <Image src={solunyaLogo} alt="Imagem do logo da solunya" width={150} />
        <div>
          <p className="text-md font-bold text-[#fff]">SOLUNYA </p>
          <p className="text-md font-bold text-[#fff]">SOFTWARE HOUSE</p>
        </div>
      </div>

      <div className="flex flex-col items-center mb-20">
        <p className="lg:text-8xl md:text-6xl lg:text-start text-center text-4xl text-[#fff]">
          Transformando idéias
        </p>
        <p className="lg:text-8xl md:text-6xl  lg:text-start text-center  sm:text-6xl text-4xl font-bold text-[#fff]">
          em experiências digitais
        </p>
      </div>

      <h1 className="lg:text-3xl md:text-2xl lg:text-start text-center text-2xl text-[#fff] mb-5">
        EMPRESAS QUE CONFIAM E INDICAM A SOLUNYA
      </h1>

      <div className=" flex w-full justify-center">
        <Carousel
          ArrayCarousel={[
            { name: "caio", id: 1, description: "brasil" },
            { name: "nathalia", id: 1, description: "argentina" },
            { name: "Giovani", id: 1, description: "bolivia" },
          ]}
        />
      </div>
    </main>
  );
}
