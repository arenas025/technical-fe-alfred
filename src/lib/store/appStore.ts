// TP
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

// BL
import { AirportSliceInterface, createAirportSlice } from "./airportSlice";
import { createAppSlice } from "./appSlice";

interface AppStoreInterface {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

type CombinedTypeSlice = AirportSliceInterface & AppStoreInterface;

export const useAppStore = create<CombinedTypeSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createAirportSlice(...a),
        ...createAppSlice(...a),
      }),
      {
        name: "appStore",
        version: 0,
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          allAirports: state.allAirports,
          selectedAirport: state.selectedAirport,
          page: state.page,
        }),
      }
    )
  )
);

export default useAppStore;
