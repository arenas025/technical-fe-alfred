// TP
import { useCallback } from "react";

// BL
import { fetchAirports } from "../services/api";
import useAppStore from "../store/appStore";

const CALLS_PER_PAGE_UI = 10;

export const useGetAirports = () => {
  const setAllAirports = useAppStore((state) => state.setAllAirports);
  const setIsLoading = useAppStore((state) => state.setIsLoading);
  const setPaginatedAirports = useAppStore(
    (state) => state.setPaginatedAirports
  );
  const airports = useAppStore((state) => state.allAirports);

  const getAirports = useCallback(
    async (offset: number) => {
      setIsLoading(true);
      try {
        const response = await fetchAirports(offset);
        setAllAirports(response);
        setPaginatedAirports(response.slice(0, CALLS_PER_PAGE_UI));
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
      const paginatedAirports = airports.slice(from, to);
      const isLastLocalPage =
        airports.length !== 0 && from + CALLS_PER_PAGE_UI > airports.length;

      if (isLastLocalPage) {
        getAirports(APIOffset);
      }
      setPaginatedAirports(paginatedAirports);
    },
    [setPaginatedAirports, airports, getAirports]
  );

  return {
    getAirports,
    getPaginatedAirports,
  };
};
