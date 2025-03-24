"use client";

// TP
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// BL
import { useGetAirports } from "@/lib/hooks/useGetAirports";
import useAppStore from "@/lib/store/appStore";

// UI
import Header from "@/UI/molecules/Header/Header";
import Spinner from "@/UI/atoms/Spinner/Spinner";
import GeneralAirportCard from "@/UI/organisms/GeneralAirportInfoCard/GeneralAirportCard";
import Pagination from "@/UI/organisms/Pagination/Pagination";
import RefreshAirportsComponent from "@/UI/organisms/RefreshAirportsComponent/RefreshAirportsComponent";

export default function Home() {
  const { getPaginatedAirports, getAirports } = useGetAirports();
  const isLoading = useAppStore((state) => state.isLoading);
  const setSelectedAirport = useAppStore((state) => state.setSelectedAirport);
  const filteredAirports = useAppStore((state) => state.filteredAirports);
  const paginatedAirports = useAppStore((state) => state.paginatedAirports);
  const totalAirports = useAppStore((state) => state.totalAirports);
  const page = useAppStore((state) => state.page);
  const setPage = useAppStore((state) => state.setPage);
  const searchFilterApplied = useAppStore((state) => state.searchFilterApplied);

  useEffect(() => {
    getPaginatedAirports(page);
  }, [page, getPaginatedAirports]);

  useEffect(() => {
    getAirports(0);
  }, []);

  const noResultsFound = searchFilterApplied && filteredAirports.length === 0;

  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-evenly h-screen ">
      <Header />

      {isLoading ? (
        <Spinner />
      ) : (
        paginatedAirports.length > 0 &&
        (noResultsFound ? (
          <RefreshAirportsComponent
            isCleaningFilter
            text="No hay aeropuertos que coincidan con tu busqueda"
          />
        ) : (
          <>
            <div className="grid h-[80%] justify-items-center w-[100%] mt-[100px] py-[20px] overflow-y-auto md:grid-cols-2 grid-cols-1 md:px-10 gap-4">
              {paginatedAirports.map((airport, index) => (
                <GeneralAirportCard
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
            <Pagination
              totalResults={totalAirports}
              page={page}
              setPage={setPage}
            />
          </>
        ))
      )}
    </div>
  );
}
