import Image from "next/image";

import WppIcon from "../../public/wpp.png";

export function Wpp() {
  return (
    <>
      <div className=" fixed bottom-10 right-10 z-50 animate-pulse">
        <a
          href="https://wa.me/5515996641722"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="md:w-20 w-10"
            src={WppIcon}
            alt="Logo do WhatsApp"
          />
        </a>
      </div>
    </>
  );
}
