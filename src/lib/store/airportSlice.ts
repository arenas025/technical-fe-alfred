import { StateCreator } from "zustand";
import { AirportInterface } from "../interfaces/Airports.interface";

export interface AirportSliceInterface {
  allAirports: AirportInterface[];
  setAllAirports: (airport: AirportInterface[]) => void;
  paginatedAirports: AirportInterface[];
  setPaginatedAirports: (airport: AirportInterface[]) => void;
}

export const createAirportSlice: StateCreator<AirportSliceInterface> = (
  set
) => ({
  allAirports: [],
  setAllAirports: (airports) =>
    set((state) => ({ allAirports: [...state.allAirports, ...airports] })),

  paginatedAirports: [],
  setPaginatedAirports: (airport) =>
    set(() => ({
      paginatedAirports: [...airport],
    })),
});
