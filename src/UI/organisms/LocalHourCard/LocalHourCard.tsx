// TP
import Image from "next/image";

// UI
import AirportCard from "../AirportCard/AirportCard";

const LocalHourCard = () => {
  const localhour = new Date().toLocaleString("es-ES");
  return (
    <AirportCard
      isDetailCard
      className="hover:scale-none md:h-fit cursor-default"
      classNameContainerChildren="justify-center  items-center gap-10 py-10 flex-col"
      hasIcon={false}
      onClick={() => {}}
    >
      <div className="flex gap-5 justify-center items-center md:justify-start w-[100%] md:w-[95%] break-words">
        <Image
          src="/clock.svg"
          className="lg:w-[55px] lg:h-[55px] w-6 h-6 "
          alt="airport"
          width={55}
          height={55}
        />
        <p className="gradient-font lg:text-[40px] lg:text-left  font-bold text-2xl">
          Hora local
        </p>
      </div>
      <div className="flex  justify-center items-center md:justify-start md:items-start flex-col gap-2 w-[100%] md:w-[95%] break-words">
        <p className="text-white text-lg  font-inter lg:text-xl">{localhour}</p>
      </div>
    </AirportCard>
  );
};

export default LocalHourCard;
