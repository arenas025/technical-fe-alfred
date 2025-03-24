import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "@/UI/atoms/searchBar/searchBar";

describe("SearchBar Component", () => {
  test("the component renders correctly", () => {
    render(<SearchBar />);

    const searchInput = screen.getByTestId("search-bar");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole("button", { name: "Buscar" });
    expect(searchButton).toBeInTheDocument();
  });

  test("updates the input value correctly when typing", () => {
    render(<SearchBar />);
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Colombia" } });
    expect(searchInput).toHaveValue("Colombia");
  });
});
