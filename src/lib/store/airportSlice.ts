import { StateCreator } from "zustand";
import { AirportInterface } from "../interfaces/Airports.interface";

export interface AirportSliceInterface {
  allAirports: AirportInterface[];
  setAllAirports: (airport: AirportInterface[]) => void;

  paginatedAirports: AirportInterface[];
  setPaginatedAirports: (airport: AirportInterface[]) => void;

  selectedAirport: AirportInterface | null;
  setSelectedAirport: (airport: AirportInterface | null) => void;

  filteredAirports: AirportInterface[];
  setFilteredAirports: (airport: AirportInterface[]) => void;

  totalAirports: number;
  setTotalAirports: (total: number) => void;

  page: number;
  setPage: (page: number) => void;
}

export const createAirportSlice: StateCreator<AirportSliceInterface> = (set) => ({
  allAirports: [],
  setAllAirports: (airports) =>
    set((state) => ({ allAirports: [...state.allAirports, ...airports] })),

  paginatedAirports: [],
  setPaginatedAirports: (airport) =>
    set(() => ({
      paginatedAirports: [...airport],
    })),

  page: 0,
  setPage: (page) => set(() => ({ page })),

  selectedAirport: null,
  setSelectedAirport: (airport) => set(() => ({ selectedAirport: airport })),

  filteredAirports: [],
  setFilteredAirports: (airport) => set(() => ({ filteredAirports: airport })),

  totalAirports: 0,
  setTotalAirports: (total) => set(() => ({ totalAirports: total })),
});
