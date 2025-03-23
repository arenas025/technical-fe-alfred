"use client";
import useAppStore from "@/lib/store/appStore";
import Button from "@/UI/atoms/Button/Button";
import Tabs from "@/UI/molecules/Tabs/Tabs";
import DetailedAirportCard from "@/UI/organisms/DetailedAirportCard/DetailedAirportCard";
import LocationAirportCard from "@/UI/organisms/LocationAirportCard/LocationAirportCard";
import Map from "@/UI/organisms/Map/Map";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const AirportDetails = () => {
  const selectedAirport = useAppStore((state) => state.selectedAirport);
  const router = useRouter();
  const params = useParams();

  const [activeTab, setActiveTab] = useState("General");

  const headers = ["General", "Ubicación", "Zona horaria", "Estadisticas"];

  if (!selectedAirport || params.airportId !== selectedAirport.id) {
    // extraer esto, puede usarse en el 404 ?
    return (
      <div className=" h-screen  gap-3 flex flex-col items-center justify-center text-2xl font-bold font-inter">
        <p className="text-white">Ups, no se encontró el aeropuerto</p>
        <Button
          variant="search"
          className="!w-fit"
          onClick={() => router.push("/")}
          text="Volver a la pagina principal"
        />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "General":
        return (
          <DetailedAirportCard
            country={country_name}
            iataCode={iata_code}
            icaoCode={icao_code}
            iataCity={city_iata_code}
            phoneNumber={phone_number}
          />
        );
      case "Ubicación":
        return (
          <div className="flex w-full flex-col items-center justify-start">
            <LocationAirportCard
              latitude={latitude}
              longitude={longitude}
              geoNameId={geoname_id}
            />
            <Map latitude={Number(latitude)} longitude={Number(longitude)} />
          </div>
        );
      case "Tab 2":
        return <div>Tab 2</div>;
    }
  };

  const {
    iata_code,
    icao_code,
    latitude,
    longitude,
    geoname_id,
    phone_number,
    country_name,
    city_iata_code,
  } = selectedAirport;

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start ">
      <p className="gradient-font text-[80px] mb-9 font-bold font-inter">
        {selectedAirport.airport_name}
      </p>
      <div className="flex  w-[95%] gap-16 flex-col items-center justify-start">
        <Tabs
          headers={headers}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {renderContent()}
      </div>
    </div>
  );
};

export default AirportDetails;
