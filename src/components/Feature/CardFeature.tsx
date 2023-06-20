interface CardFeatureProps {
  bgColor: string;
  number: string;
  name: string;
  description: string;
}

export function CardFeature(props: CardFeatureProps) {
  return (
    <div className={`basis-1/3 flex flex-col p-5 ${props.bgColor}`}>
      <div className="basis-1/3 flex flex-row justify-center items-center">
        <div className="rounded-full w-12 h-12 bg-BackgroundWhite flex justify-center items-center sm:text-3xl  text-xl mr-5">
          {props.number}
        </div>
        <p className="lg:text-4xl sm:text-2xl text-xl ">{props.name}</p>
      </div>
      <p className="basis-2/3 p-5 lg:text-2xl md:text-xl sm:text-2xl text-xl text-justify">
        {props.description}
      </p>
    </div>
  );
}
