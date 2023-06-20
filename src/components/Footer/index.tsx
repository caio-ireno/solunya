import Image from "next/image";

import intsgramIcon from "../../../public/instagram.png";
import linkedinIcon from "../../../public/linkedin.png";

export function Footer() {
  return (
    <main className="w-full h-[800px]  bg-BackgroundBlue flex flex-col gap-5 p-10">
      <div className="flex flex-row md:basis-3/4 basis-1/6 ">
        <div className="basis-full md:basis-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-TextColorLight">
            Ready to work with us?
          </h1>
          <p className="md:text-2xl text-lg text-TextColorLight">
            Send us a message and lets talk about it.
          </p>
        </div>
        <div className="hidden md:grid grid-cols-5 grid-rows-5 gap-16 basis-1/3  justify-items-center">
          {Array.from({ length: 25 }).map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 bg-BackgroundWhite rounded-full"
            ></div>
          ))}
        </div>
      </div>
      <div className="md:basis-1/4 basis-5/6 flex md:flex-row  flex-col gap-4">
        <div className="md:basis-1/3 flex items-end ">
          <h1 className="text-4xl text-TextColorLight ">Nossos contatos</h1>
        </div>
        <div className="bg-BackgroundOrange basis-1/4 px-5 py-10 flex flex-col justify-between">
          <h1 className="text-4xl text-TextColorDark font-bold">Telefone</h1>
          <a
            href="https://wa.me/5515996641722"
            className="text-4xl text-TextColorDark"
          >
            (15) 996641722
          </a>
        </div>
        <div className="bg-BackgroundYellow basis-1/4 px-5 py-10 flex flex-col justify-between">
          <h1 className="text-4xl text-TextColorDark font-bold">Email</h1>
          <a
            href="mailto:solunya.software@gmail.com"
            className="text-4xl text-TextColorDark"
          >
            solunya.software@gmail.com
          </a>
        </div>
        <div className="bg-BackgroundLightBlue basis-1/4 px-5 py-10 flex flex-col justify-between">
          <h1 className="text-4xl text-TextColorDark font-bold">Social</h1>
          <div className="flex flex-row gap-5">
            <a
              href="linkedin.com/solunya"
              className="text-4xl text-TextColorDark"
            >
              <Image className="w-10" src={linkedinIcon} alt="linkedin icon" />
            </a>
            <a
              href="instagram.com/solunya"
              className="text-4xl text-TextColorDark"
            >
              <Image className="w-10" src={intsgramIcon} alt="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
