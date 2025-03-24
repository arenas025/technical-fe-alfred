// TP
import React from "react";
import Image from "next/image";

// UI
import AirportCard from "../AirportCard/AirportCard";

interface TimezoneCardProps {
  timezone: string;
  gmt: string;
}

const TimezoneCard = ({ timezone, gmt }: TimezoneCardProps) => {
  const infoToShow = [
    {
      label: "Zona horaria",
      value: timezone ?? "No disponible",
    },
    {
      label: "GMT",
      value: gmt ?? "No disponible",
    },
  ];

  return (
    <AirportCard
      isDetailCard
      classNameContainerChildren="items-center lg:items-start gap-10 py-10 flex-col"
      hasIcon={false}
      onClick={() => {}}
    >
      <div className="flex gap-5 justify-center items-center md:justify-start w-[100%] md:w-[95%] break-words">
        <Image
          src="/global.svg"
          alt="airport"
          className="lg:w-[55px] lg:h-[55px] w-6 h-6 "
          width={55}
          height={55}
        />
        <p className="gradient-font lg:text-[40px] lg:text-left  font-bold text-2xl">
          Zona horaria
        </p>
      </div>
      <div className="flex flex-col md:items-start justify-center items-center lg:justify-start lg:items-start gap-2 w-[100%] md:w-[95%] break-words">
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

export default TimezoneCard;
