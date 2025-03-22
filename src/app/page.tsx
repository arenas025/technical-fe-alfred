"use client";

// TP
import { useEffect, useState } from "react";
// BL
import { useGetAirports } from "@/lib/hooks/useGetAirports";
import useAppStore from "@/lib/store/appStore";

// UI
import Header from "@/UI/molecules/Header/Header";
import AirportCard from "@/UI/organisms/AirportCard/AirportCard";
import Button from "@/UI/atoms/Button/Button";
import Spinner from "@/UI/atoms/Spinner/Spinner";
import { useRouter } from "next/navigation";

export default function Home() {
  const { getPaginatedAirports, getAirports } = useGetAirports();
  const isLoading = useAppStore((state) => state.isLoading);
  const setSelectedAirport = useAppStore((state) => state.setSelectedAirport);
  const paginatedAirports = useAppStore((state) => state.paginatedAirports);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPaginatedAirports(page);
  }, [page, getPaginatedAirports]);

  useEffect(() => {
    getAirports(0);
  }, []);

  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-evenly h-screen ">
      <Header />

      {!isLoading ? (
        <>
          <div className="grid h-[80%] justify-items-center w-[100%] mt-[100px] py-[20px] overflow-y-auto md:grid-cols-2 grid-cols-1 md:px-10 gap-4">
            {paginatedAirports.map((airport, index) => (
              <AirportCard
                onClick={() => {
                  setSelectedAirport(airport);
                  router.push(`/airport/${airport.id}`);
                }}
                key={index}
                city={airport.country_iso2}
                country={airport.country_name ?? "Unknown"}
                name={airport.airport_name ?? "Unknown"}
                iataCodeCity={airport.city_iata_code ?? "Unknown"}
              />
            ))}
          </div>
          <div className="flex justify-center py-5 items-center bg-transparent gap-4">
            {page > 0 && (
              <Button
                text="Atras"
                variant="pagination"
                onClick={() => setPage(page - 1)}
              />
            )}
            <p className="text-white font-bold text-base">{page + 1}</p>
            <Button
              text="Adelante"
              variant="pagination"
              onClick={() => setPage(page + 1)}
            />
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
