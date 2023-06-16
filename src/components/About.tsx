import Image from "next/image";

import element from "../../public/Elemento.png";

export function About() {
  return (
    <main className="w-full lg:h-[800px] md:h-[600px] h-[400px] bg-BackgroundWhite relative sm:pl-10 p-5 flex flex-col justify-center">
      <h1 className="xl:text-8xl lg:text-7xl md:text-7xl sm:text-4xl text-4xl | sm:max-w-md md:max-w-lg lg:max-w-2xl max-w-md  mb-10">
        Criação de Sites e Apps
      </h1>
      <div className="sm:max-w-md lg:max-w-xl xl:max-w-4xl ">
        <p className="text-justify text-md md:text-lg lg:text-2xl text-sm">
          Nossa empresa é especializada em desenvolvimento de sites, aplicativos
          e design. Com uma equipe talentosa de designers e desenvolvedores
          experientes, oferecemos soluções digitais personalizadas e de alta
          qualidade, atendendo às necessidades e objetivos dos nossos clientes.
          Estamos aqui para ajudar você a ter uma presença online eficaz e
          impactante, desde o design até o desenvolvimento de sites e
          aplicativos funcionais.
        </p>
      </div>
      <Image
        className="absolute bottom-0 right-0 w-1/6 sm:w-1/4 md:w-1/3 lg:w-1/3 xl:w-1/4"
        src={element}
        alt="elemento decorativo colorido"
        width={500}
      />
    </main>
  );
}
