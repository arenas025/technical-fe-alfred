const SearchBar = () => {
  return (
    <div className="flex w-[60%] justify-evenly items-center gap-4">
      <div className="flex items-center gap-2 bg-white lg:rounded-2xl rounded-xl px-2 p-[4px]">
        <input
          type="text"
          placeholder="Buscar aeropuertos..."
          className="w-[100%] placeholder:text-[rgb(0,96,255)] outline-none text-xs md:text-base font-inter lg:h-[30px] h-[20px]  "
        />
      </div>
      <button className="bg-linear-to-r  lg:w-36 max-w-[300px] font-inter border-white border-[1px] from-[#0060FF] to-[#00FFE7]  px-4 py-1 rounded-md">
        <p className="text-white text-sm lg:text-base ">Buscar</p>
      </button>
    </div>
  );
};

export default SearchBar;
