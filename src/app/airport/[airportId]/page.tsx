"use client";
import useAppStore from "@/lib/store/appStore";

const AirportDetails = ({ params }: { params: { airportId: string } }) => {
  const selectedAirport = useAppStore((state) => state.selectedAirport);
  // params: {
  //   params.airportId;
  // }

  if (!selectedAirport) {
    return <div>No airport selected</div>;
  }

  const { iata_code, icao_code, phone_number, country_name, city_iata_code } =
    selectedAirport;

  return (
    <div className="flex flex-col items-center justify-center z-10 bg-white">
      <p>{iata_code}</p>
      <p>{icao_code}</p>
      <p>{phone_number}</p>
      <p>{country_name}</p>
      <p>{city_iata_code}</p>
    </div>
  );
};

export default AirportDetails;
