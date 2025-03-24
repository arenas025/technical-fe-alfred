// TP
import { useCallback } from "react";

// BL
import { fetchAirports } from "../services/api";
import useAppStore from "../store/appStore";

const CALLS_PER_PAGE_UI = 10;

export const useGetAirports = () => {
  const setAllAirports = useAppStore((state) => state.setAllAirports);
  const setIsLoading = useAppStore((state) => state.setIsLoading);
  const setTotalAirports = useAppStore((state) => state.setTotalAirports);
  const setPage = useAppStore((state) => state.setPage);
  const setPaginatedAirports = useAppStore(
    (state) => state.setPaginatedAirports
  );
  const setFilteredAirports = useAppStore((state) => state.setFilteredAirports);
  const filteredAirports = useAppStore((state) => state.filteredAirports);
  const airports = useAppStore((state) => state.allAirports);

  const getAirports = useCallback(
    async (offset: number) => {
      setIsLoading(true);
      try {
        const localStorageAirports = JSON.parse(
          localStorage.getItem("appStore") ?? "{}"
        );

        const areAirportsInLocalStorage =
          localStorageAirports.state.allAirports.length !== 0;

        const isRefreshWithAirportsInLocalStorage =
          areAirportsInLocalStorage && offset === 0;

        if (!isRefreshWithAirportsInLocalStorage) {
          const response = await fetchAirports(offset);
          setAllAirports(response);
          setPaginatedAirports(response.slice(0, CALLS_PER_PAGE_UI));
        }
      } catch (error) {
        console.error("Error in useGetAirports:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [setAllAirports, setPaginatedAirports, setIsLoading]
  );

  const getPaginatedAirports = useCallback(
    async (offset: number) => {
      const from = CALLS_PER_PAGE_UI * offset;
      const to = from + CALLS_PER_PAGE_UI;

      const APIOffset = Math.floor(from / 100);
      const airportsToPaginate =
        filteredAirports.length > 0 ? filteredAirports : airports;
      const totalAirports = airportsToPaginate.length;
      setTotalAirports(totalAirports);
      const paginatedAirports = airportsToPaginate.slice(from, to);
      const isLastLocalPage =
        airports.length !== 0 && from + CALLS_PER_PAGE_UI > airports.length;

      if (isLastLocalPage) {
        getAirports(APIOffset);
        return;
      }
      setPaginatedAirports(paginatedAirports);
    },
    [
      setPaginatedAirports,
      airports,
      getAirports,
      setTotalAirports,
      filteredAirports,
    ]
  );

  const getPaginatedAirportsWithSearch = useCallback(
    async (offset: number, search: string) => {
      if (search === "") {
        setFilteredAirports([]);
        return;
      }

      const searchLowerCase = search.toLowerCase();

      const filteredAirports = airports.filter((airport) => {
        return (
          airport.iata_code.toLowerCase().startsWith(searchLowerCase) ||
          airport.airport_name.toLowerCase().includes(searchLowerCase)
        );
      });

      setPage(0);

      setFilteredAirports(filteredAirports);
    },
    [setPaginatedAirports, airports, setFilteredAirports, setPage]
  );

  return {
    getAirports,
    getPaginatedAirports,
    getPaginatedAirportsWithSearch,
  };
};
