// TP
import Image from "next/image";

// UI
import AirportCard from "../AirportCard/AirportCard";

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
      classNameContainerChildren="items-center md:items-start gap-10 py-10 flex-col"
      hasIcon={false}
      onClick={() => {}}
    >
      <div className="flex justify-center md:justify-start items-center gap-5 w-[100%] md:w-[95%] break-words">
        <Image
          src="/map-point.svg"
          className="lg:w-[55px] lg:h-[55px] w-6 h-6 "
          alt="airport"
          width={55}
          height={55}
        />
        <p className="gradient-font lg:text-[40px] md:text-left  font-bold text-2xl">
          Ubicación
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center md:justify-start md:items-start w-[100%] md:w-[95%] break-words">
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

export default LocationAirportCard;
