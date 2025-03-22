import Image from "next/image";

interface AirportCardProps {
  city: string;
  country: string;
  name: string;
  iataCodeCity: string;
}

const AirportCard = ({
  city,
  country,
  name,
  iataCodeCity,
}: AirportCardProps) => {
  return (
    <div className=" cursor-pointer  md:h-[235px]  md:max-w-[1500px] w-[95%] md:border-white md:border-[1px] md:rounded-[8px] flex items-center justify-center  ">
      <div className=" p-2 items-center md:items-start bg-linear-to-r flex md:p-10 flex-row md:flex-col justify-between h-full w-full from-[#3F495F] border-white md:border-none border-[1px] rounded-[8px] to-[#0E1934]">
        <div className="flex flex-col gap-2  w-[80%] md:w-[90%] break-words">
          <p className="text-white text-lg font-bold font-inter lg:text-xl">
            {name}
          </p>
          <p className="text-white lg:text-xl text-xs font-inter">
            {city}, {country}
          </p>
        </div>
        <p className="gradient-font lg:text-[42px] lg:text-left  font-bold text-[30px]">
          {iataCodeCity}
        </p>
      </div>
      <div className="hidden md:rounded-r-[8px] md:flex bg-[url('/image-card.webp')] bg-cover bg-center w-full  h-full  bg-no-repeat relative">
        <div className="bg-[#0E1934]  md:rounded-r-[8px] z-10 opacity-90 w-full h-full absolute top-0 left-0" />
        <Image
          src="/airplane-icon.svg"
          alt="airport"
          width={55}
          height={55}
          className="absolute top-5 z-10 right-5"
        />
      </div>
    </div>
  );
};

export default AirportCard;
