import { StateCreator } from "zustand";

export interface AppSliceInterface {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  searchFilterApplied: boolean;
  setSearchFilterApplied: (searchFilterApplied: boolean) => void;
}

export const createAppSlice: StateCreator<AppSliceInterface> = (set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),

  searchFilterApplied: false,
  setSearchFilterApplied: (searchFilterApplied) => set({ searchFilterApplied }),
});
