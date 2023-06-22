import Image from "next/image";

import solunyaLogo from "../../../public/solunya-white.png";

export function Home() {
  return (
    <main className="w-full  h-[800px]  bg-BackgroundBlue flex flex-col p-5  ">
      <div className="flex items-center md:mb-20 mb-5">
        <Image
          src={solunyaLogo}
          alt="Imagem do logo da solunya"
          className="sm:w-[150px] w-[100px]"
        />
        <div>
          <p className="sm:text-lg text-sm font-bold text-[#fff]">SOLUNYA </p>
          <p className="sm:text-lg text-sm font-bold text-[#fff]">
            SOFTWARE HOUSE
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center sm:mb-20  mb-10">
        <p className="lg:text-7xl md:text-6xl lg:text-start text-center text-4xl text-[#fff]">
          Transformando idéias
        </p>
        <p className="lg:text-7xl md:text-6xl  lg:text-start text-center   text-4xl font-bold text-[#fff]">
          em{" "}
          <span className="font-bold text-BackgroundYellow">
            experiências digitais
          </span>
        </p>
      </div>
    </main>
  );
}
