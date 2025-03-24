import React from "react";
import AirportCard from "../AirportCard/AirportCard";

interface GeneralAirportCardProps {
  city: string;
  country: string;
  name: string;
  iataCodeCity: string;
  onClick: () => void;
}

const GeneralAirportCard = ({
  city,
  country,
  name,
  iataCodeCity,
  onClick,
}: GeneralAirportCardProps) => {
  return (
    <AirportCard isGeneralCard hasIcon onClick={onClick} id={iataCodeCity}>
      <div className="flex flex-col gap-2  w-[80%] md:w-[95%] break-words">
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
    </AirportCard>
  );
};

export default GeneralAirportCard;
