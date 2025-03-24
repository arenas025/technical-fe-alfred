// TP
import { useEffect, useState } from "react";

// BL
import { useGetAirports } from "@/lib/hooks/useGetAirports";
import useAppStore from "@/lib/store/appStore";

// UI
import Button from "../Button/Button";

const SearchBar = () => {
  const setPage = useAppStore((state) => state.setPage);
  const { getPaginatedAirportsWithSearch } = useGetAirports();
  const [search, setSearch] = useState("");
  const setSearchFilterApplied = useAppStore(
    (state) => state.setSearchFilterApplied
  );

  useEffect(() => {
    if (search === "") {
      getPaginatedAirportsWithSearch(0, "");
      setSearchFilterApplied(false);
    }
  }, [search, getPaginatedAirportsWithSearch, setPage, setSearchFilterApplied]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.length !== 0) {
      getPaginatedAirportsWithSearch(0, search);
      setSearchFilterApplied(true);
    }
  };

  return (
    <form
      data-testid="search-bar"
      onSubmit={handleSubmit}
      className="flex w-full md:w-[60%] justify-evenly items-center gap-4"
    >
      <div className="flex w-[60%] items-center gap-2 bg-white lg:rounded-2xl rounded-xl px-2 p-[4px]">
        <input
          data-testid="search-input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          value={search}
          placeholder="Buscar aeropuertos..."
          className="w-[100%] placeholder:text-[rgb(0,96,255)] outline-none text-xs md:text-base font-inter lg:h-[30px] h-[20px]  "
        />
        {
          <div
            onClick={() => {
              setSearch("");
              setPage(0);
              setSearchFilterApplied(false);
              getPaginatedAirportsWithSearch(0, "");
            }}
            className="cursor-pointer rounded-full h-full px-5 bg-red-300"
          >
            <p className="text-white font-bold ">Limpiar</p>
          </div>
        }
      </div>
      <Button
        type="submit"
        text="Buscar"
        variant="search"
        data-testid="search-button"
      />
    </form>
  );
};

export default SearchBar;
