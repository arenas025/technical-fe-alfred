// TP
import React from "react";
import Image from "next/image";

// UI
import AirportCard from "../AirportCard/AirportCard";

interface DetailedAirportCardProps {
  iataCode: string;
  icaoCode: string;
  country: string;
  iataCity: string;
  phoneNumber: string | null;
}

const DetailedAirportCard = ({
  iataCode,
  icaoCode,
  country,
  iataCity,
  phoneNumber,
}: DetailedAirportCardProps) => {
  const infoToShow = [
    {
      label: "Código IATA",
      value: iataCode ?? "No disponible",
    },
    {
      label: "Código ICAO",
      value: icaoCode ?? "No disponible",
    },
    {
      label: "País",
      value: country ?? "No disponible",
    },
    {
      label: "Ciudad IATA",
      value: iataCity ?? "No disponible",
    },
    {
      label: "Teléfono",
      value: phoneNumber ?? "No disponible",
    },
  ];
  return (
    <AirportCard
      className="hover:scale-none md:h-auto cursor-default"
      classNameContainerChildren=" justify-center items-center gap-10 py-10 flex-col"
      hasIcon={false}
      id={iataCode}
      onClick={() => {}}
    >
      <div className="flex justify-center lg:items-start items-center gap-5 w-[100%] md:w-[95%] break-words">
        <Image
          src="/info-circle.svg"
          className="lg:w-[55px] lg:h-[55px] w-6 h-6 "
          alt="airport"
          width={55}
          height={55}
        />
        <p className="gradient-font lg:text-[40px] lg:text-left font-bold text-2xl">
          Información general
        </p>
      </div>
      <div className="flex justify-center items-center md:justify-start md:items-start flex-col gap-2 w-[100%] md:w-[95%] break-words">
        {infoToShow.map((info) => (
          <div key={info.label} className="flex flex-row gap-2">
            <p className="text-white text-lg font-bold font-inter lg:text-xl">
              {info.label}:
            </p>
            <p className="text-white text-lg  font-inter lg:text-xl">
              {info.value}
            </p>
          </div>
        ))}
      </div>
    </AirportCard>
  );
};

export default DetailedAirportCard;
