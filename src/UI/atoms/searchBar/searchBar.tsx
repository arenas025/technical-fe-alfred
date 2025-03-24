import { useGetAirports } from "@/lib/hooks/useGetAirports";
import Button from "../Button/Button";
import { useState } from "react";
import useAppStore from "@/lib/store/appStore";

const SearchBar = () => {
  const setPage = useAppStore((state) => state.setPage);
  const [search, setSearch] = useState("");
  const { getPaginatedAirportsWithSearch } = useGetAirports();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.preventDefault();
        getPaginatedAirportsWithSearch(0, search);
      }}
      className="flex w-[60%] justify-evenly items-center gap-4"
    >
      <div className="flex w-[60%] items-center gap-2 bg-white lg:rounded-2xl rounded-xl px-2 p-[4px]">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          value={search}
          placeholder="Buscar aeropuertos..."
          className="w-[100%] placeholder:text-[rgb(0,96,255)] outline-none text-xs md:text-base font-inter lg:h-[30px] h-[20px]  "
        />
        {search && (
          <div
            onClick={() => {
              setSearch("");
              setPage(0);
              getPaginatedAirportsWithSearch(0, "");
            }}
            className="cursor-pointer rounded-full h-full px-5 bg-red-300"
          >
            <p className="text-white font-bold ">X</p>
          </div>
        )}
      </div>
      <Button
        type="submit"
        text="Buscar"
        variant="search"
        onClick={() => {
          getPaginatedAirportsWithSearch(0, search);
        }}
      />
    </form>
  );
};

export default SearchBar;
