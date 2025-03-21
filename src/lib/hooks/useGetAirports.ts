// TP
import { useCallback } from "react";

// BL
import { fetchAirports } from "../services/api";
import useAppStore from "../store/appStore";

interface UseGetAirportsParams {
  offset: number;
}

const CALLS_PER_PAGE_UI = 10;

export const useGetAirports = () => {
  const setAllAirports = useAppStore((state) => state.setAllAirports);
  const setPaginatedAirports = useAppStore(
    (state) => state.setPaginatedAirports
  );
  const airports = useAppStore((state) => state.allAirports);

  const getAirports = useCallback(
    async (params: UseGetAirportsParams) => {
      try {
        const response = await fetchAirports(params);
        setAllAirports(response);
        setPaginatedAirports(response.slice(0, CALLS_PER_PAGE_UI));
      } catch (error) {
        console.error("Error in useGetAirports:", error);
      }
    },
    [setAllAirports, setPaginatedAirports]
  );

  const getPaginatedAirports = useCallback(
    async (params: UseGetAirportsParams) => {
      const from = CALLS_PER_PAGE_UI * params.offset;
      const to = from + CALLS_PER_PAGE_UI;

      const APIOffset = Math.floor(from / 100);
      const paginatedAirports = airports.slice(from, to);
      const isLastLocalPage =
        airports.length !== 0 && from + CALLS_PER_PAGE_UI > airports.length;

      if (isLastLocalPage) {
        getAirports({ offset: APIOffset * 100 });
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
