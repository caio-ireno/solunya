interface CardFeatureProps {
  bgColor: string;
  number: string;
  name: string;
  description: string;
}

export function CardFeature(props: CardFeatureProps) {
  return (
    <div
      className={`sm:basis-1/3 basis-1/6 flex flex-col p-2 sm:p-5 ${props.bgColor}`}
    >
      <div className="basis-1/3   flex flex-row justify-center items-center">
        <div className="rounded-full sm:w-12 sm:h-12 w-8 h-8 bg-BackgroundWhite flex justify-center items-center sm:text-3xl  text-xl mr-5">
          {props.number}
        </div>
        <p className="lg:text-4xl sm:text-2xl text-xl ">{props.name}</p>
      </div>
      <p className="basis-2/3 p-2 sm:p-5 lg:text-2xl md:text-xl sm:text-2xl text-md text-justify">
        {props.description}
      </p>
    </div>
  );
}
