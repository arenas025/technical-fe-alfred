"use client";

// TP
import { useEffect, useState } from "react";
// BL
import { useGetAirports } from "@/lib/hooks/useGetAirports";
import useAppStore from "@/lib/store/appStore";

// UI
import Header from "@/UI/molecules/Header/Header";
import AirportCard from "@/UI/organisms/AirportCard/AirportCard";

export default function Home() {
  const { getPaginatedAirports, getAirports } = useGetAirports();
  const paginatedAirports = useAppStore((state) => state.paginatedAirports);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPaginatedAirports({ offset: page });
  }, [page, getPaginatedAirports]);

  useEffect(() => {
    getAirports({ offset: 0 });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-evenly h-screen overflow-hidden">
      <Header />

      <div className="grid h-[80%] justify-items-center w-[100%] mt-[100px] overflow-y-auto md:grid-cols-2 grid-cols-1 gap-4">
        {paginatedAirports.map((airport, index) => (
          <AirportCard
            key={index}
            city={airport.country_iso2}
            country={airport.country_name ?? "Unknown"}
            name={airport.airport_name ?? "Unknown"}
            iataCodeCity={airport.city_iata_code ?? "Unknown"}
          />
        ))}
      </div>

      {/* EXTRAER ESTO ?  */}
      <div className="flex justify-center py-5 items-center bg-transparent gap-4">
        {page > 0 && (
          <button
            className="bg-[#0060FF] font-montserrat p-1 rounded-md w-[100px]"
            onClick={() => setPage(page - 1)}
          >
            <p className="text-white font-bold text-base">Atras</p>
          </button>
        )}
        <p className="text-white font-bold text-base">{page + 1}</p>
        <button
          className="bg-[#0060FF] font-montserrat p-1 rounded-md w-[100px]"
          onClick={() => setPage(page + 1)}
        >
          <p className="text-white font-bold text-base">Adelante</p>
        </button>
      </div>
    </div>
  );
}
