import Image from "next/image";

import ArcticBrews from "../../../public/ArcticBrews.png";
import FisioNath from "../../../public/FisioNath.jpeg";
import OndasDeParto from "../../../public/ondasDeParto.png";
import solunyaLogo from "../../../public/solunya-white.png";
import { Carousel } from "./Carousel";

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
          <p className="sm:text-md text-sm font-bold text-[#fff]">SOLUNYA </p>
          <p className="sm:text-md text-sm font-bold text-[#fff]">
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

      <div className=" flex lg:flex-row flex-col lg:px-20 px-5 gap-10 md:gap-5 items-center justify-center  ">
        <div className="text-xl md:text-3xl basis-1/4 lg:text-start text-center text-[#fff]">
          EMPRESAS QUE{" "}
          <span className="text-BackgroundYellow font-bold">CONFIAM </span>{" "}
          <span> E </span>
          <span className="text-BackgroundYellow font-bold">INDICAM</span>{" "}
          SOLUNYA
        </div>
        <div className="flex basis-2/3 justify-center items-center">
          <Carousel
            ArrayCarousel={[
              {
                ImgName: OndasDeParto,
                name: "Ondas de Parto",
                id: 1,
                description:
                  "Aplicativo desenvolvido para profissionais de saúde que trabalham com gestantes. Ondas de Parto controla a frequência das contrações e proporciona uma experiencia rapida e pratica com seu profissional.",
              },
              {
                ImgName: ArcticBrews,
                name: "Arctic Brews",
                id: 1,
                description: "argentina",
              },
              {
                ImgName: FisioNath,
                name: "Fisio. Nathalia",
                id: 1,
                description: "bolivia",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
