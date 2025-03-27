import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import SearchBar from "@/UI/atoms/searchBar/searchBar";
import { useGetAirports } from "../lib/hooks/useGetAirports";
import useAppStore from "@/lib/store/appStore";

jest.mock("../lib/hooks/useGetAirports");
jest.mock("../lib/store/appStore.ts");

describe("SearchBar Component", () => {
  const useGetAirportsMock = useGetAirports as jest.Mock;
  const useAppStoreMock = useAppStore as unknown as jest.Mock;
  const mockSetSearchFilterApplied = jest.fn();
  const mockGetPaginatedAirportsWithSearch = jest.fn();
  const mockSetPage = jest.fn();

  beforeEach(() => {
    (useAppStore as unknown as jest.Mock).mockImplementation((selector) => {
      const state = {
        setSearchFilterApplied: mockSetSearchFilterApplied,
        setPage: mockSetPage,
      };
      return selector(state);
    });

    useGetAirportsMock.mockReturnValue({
      getPaginatedAirportsWithSearch: mockGetPaginatedAirportsWithSearch,
    });
  });
  afterEach(() => {
    useAppStoreMock.mockClear();
    useGetAirportsMock.mockClear();
  });

  test("the component renders correctly", () => {
    useGetAirportsMock.mockReturnValue({
      getPaginatedAirportsWithSearch: jest.fn(),
    });
    render(<SearchBar />);

    const searchInput = screen.getByTestId("search-bar");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole("button", { name: "Buscar" });
    expect(searchButton).toBeInTheDocument();
  });

  test("updates the input value correctly when typing", () => {
    useGetAirportsMock.mockReturnValue({
      getPaginatedAirportsWithSearch: jest.fn(),
    });
    render(<SearchBar />);
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Colombia" } });
    expect(searchInput).toHaveValue("Colombia");
  });

  test("calls getPaginatedAirportsWithSearch when the button is clicked", () => {
    const getAirportsMock = useGetAirportsMock.mockReturnValue({
      getPaginatedAirportsWithSearch: jest.fn(),
    });

    render(<SearchBar />);
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Colombia" } });
    const searchButton = screen.getByRole("button", { name: "Buscar" });
    fireEvent.click(searchButton);
    expect(getAirportsMock).toHaveBeenCalledTimes(2);
  });

  test("calls setSearchFilterApplied when the input is not empty", () => {
    render(<SearchBar />);
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Colombia" } });
    const searchButton = screen.getByRole("button", { name: "Buscar" });
    fireEvent.click(searchButton);
    expect(mockSetSearchFilterApplied).toHaveBeenCalledWith(true);
  });

  test("set page in 0 when the button to clear is clicked", () => {
    render(<SearchBar />);
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Colombia" } });
    const clearButton = screen.getByTestId("clear-search-button");
    fireEvent.click(clearButton);
    expect(mockSetPage).toHaveBeenCalledWith(0);
  });
});
