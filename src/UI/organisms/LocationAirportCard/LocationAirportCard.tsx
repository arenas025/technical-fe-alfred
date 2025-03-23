import React from "react";
import AirportCard from "../AirportCard/AirportCard";
import Image from "next/image";

interface LocationAirportCardProps {
  latitude: string;
  longitude: string;
  geoNameId: string;
}

const LocationAirportCard = ({
  latitude,
  longitude,
  geoNameId,
}: LocationAirportCardProps) => {
  const infoToShow = [
    {
      label: "Latitud",
      value: latitude ?? "No disponible",
    },
    {
      label: "Longitud",
      value: longitude ?? "No disponible",
    },
    {
      label: "ID GeoName",
      value: geoNameId ?? "No disponible",
    },
  ];
  return (
    <AirportCard
      className="hover:scale-none md:h-fit cursor-default"
      classNameContainerChildren="md:w-[1000px]"
      hasIcon={false}
      onClick={() => {}}
    >
      <div className="flex gap-5 w-[80%] md:w-[95%] break-words">
        <Image src="/map-point.svg" alt="airport" width={55} height={55} />
        <p className="gradient-font lg:text-[40px] lg:text-left  font-bold text-[30px]">
          Ubicación
        </p>
      </div>
      <div className="flex flex-col gap-2 w-[80%] md:w-[95%] break-words">
        {infoToShow.map((info) => (
          <div key={info.label} className="flex flex-row gap-2">
            <p className="text-white text-3xl font-bold font-inter lg:text-xl">
              {info.label}:
            </p>
            <p className="text-white text-3xl  font-inter lg:text-xl">
              {info.value}
            </p>
          </div>
        ))}
      </div>
    </AirportCard>
  );
};

export default LocationAirportCard;
