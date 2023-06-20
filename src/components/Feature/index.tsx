import Image from "next/image";

import SiteIcon from "../../../public/siteIcon.png";
import { CardFeature } from "./CardFeature";

export function Features() {
  return (
    <main className="w-full h-[800px]  bg-BackgroundWhite20 flex flex-col">
      <div className="flex md:basis-2/3 basis-1/3 flex-row">
        <div className="flex basis-2/3 items-center justify-center flex-col">
          <h1 className="xl:text-9xl lg:text-8xl md:text-6xl text-4xl">
            Nossos
          </h1>
          <h1 className="xl:text-9xl lg:text-8xl md:text-6xl text-4xl">
            Diferenciais
          </h1>
        </div>
        <div className="flex basis-1/3 justify-center items-center ">
          <Image src={SiteIcon} alt="exemplo de um site em icones" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col  basis-1/3">
        <CardFeature
          bgColor=" bg-BackgroundLightBlue"
          number="01"
          name="Agilidade"
          description="Tenha o aplicativo na sua empresa integrado com outros sistemas de
          forma ágil e rápida"
        />
        <CardFeature
          bgColor=" bg-BackgroundYellow"
          number="02"
          name="Customização"
          description="Os aplicativos são desenvolvidos de acordo com as regras de negócio da empresa. São inspirados no seu negócio!"
        />
        <CardFeature
          bgColor="bg-BackgroundOrange"
          number="03"
          name=" Usabilidade"
          description="Os aplicativos possuem boa usabilidade, o que facilita o processo de implantação e aderência de uso pelas equipes."
        />
      </div>
    </main>
  );
}
