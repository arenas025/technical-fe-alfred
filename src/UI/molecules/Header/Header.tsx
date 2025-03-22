// TP
import Image from "next/image";

// UI
import SearchBar from "@/UI/atoms/searchBar/searchBar";

const Header = () => {
  return (
    <div className="flex flex-col md:pt-10 md:flex-row fixed md:py-5 md:px-10 lg:h-12 h-[100px] top-0  w-full items-center justify-center">
      <Image
        src="/logo.svg"
        alt="logo"
        className="w-[150px] md:w-[30%] md:max-w-[500px] my-3 object-cover"
        width={50}
        height={50}
      />
      <SearchBar />
    </div>
  );
};

export default Header;
