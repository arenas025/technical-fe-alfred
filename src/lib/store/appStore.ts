// TP
import { create } from "zustand";
import { devtools } from "zustand/middleware";

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
    (...a) => ({
      ...createAirportSlice(...a),
      ...createAppSlice(...a),
    }),
    {
      name: "appStore",
      version: 0,
    }
  )
);

export default useAppStore;
